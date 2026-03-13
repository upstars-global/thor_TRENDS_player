const crypto = require('crypto');
const https = require('https');

// Конфигурация R2
const config = {
    accessKeyId: 'e0d5ff786b08d6bdcd4e81a6d89bfdb2',
    secretAccessKey: '4fbba39ad8aa412bcdd3327ff8211ba46eed68de4571676cc28be0834dccd9ad',
    accountId: '83802fb0b9b6916c3c04c4927f3c3010',
    bucketName: 'winspirits-nl',
    region: 'auto'
};

// Функция для создания подписи AWS4
function createSignature(method, url, headers, payload, accessKey, secretKey, region, service, timestamp) {
    const dateStamp = timestamp.toISOString().slice(0, 10).replace(/-/g, '');
    const amzDate = timestamp.toISOString().replace(/[:\-]|\.\d{3}/g, '');
    
    // Создание канонического запроса
    const canonicalUri = url.pathname;
    const canonicalQueryString = url.search.slice(1);
    const canonicalHeaders = Object.keys(headers)
        .sort()
        .map(key => `${key.toLowerCase()}:${headers[key]}\n`)
        .join('');
    const signedHeaders = Object.keys(headers)
        .sort()
        .map(key => key.toLowerCase())
        .join(';');
    
    const payloadHash = crypto.createHash('sha256').update(payload).digest('hex');
    
    const canonicalRequest = [
        method,
        canonicalUri,
        canonicalQueryString,
        canonicalHeaders,
        signedHeaders,
        payloadHash
    ].join('\n');
    
    // Создание строки для подписи
    const algorithm = 'AWS4-HMAC-SHA256';
    const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
    const stringToSign = [
        algorithm,
        amzDate,
        credentialScope,
        crypto.createHash('sha256').update(canonicalRequest).digest('hex')
    ].join('\n');
    
    // Создание ключа подписи
    const kDate = crypto.createHmac('sha256', `AWS4${secretKey}`).update(dateStamp).digest();
    const kRegion = crypto.createHmac('sha256', kDate).update(region).digest();
    const kService = crypto.createHmac('sha256', kRegion).update(service).digest();
    const kSigning = crypto.createHmac('sha256', kService).update('aws4_request').digest();
    
    // Подпись
    const signature = crypto.createHmac('sha256', kSigning).update(stringToSign).digest('hex');
    
    return signature;
}

// Функция для создания предподписанного URL
function createPresignedUrl(fileName, expiresIn = 3600) {
    const timestamp = new Date();
    const dateStamp = timestamp.toISOString().slice(0, 10).replace(/-/g, '');
    const amzDate = timestamp.toISOString().replace(/[:\-]|\.\d{3}/g, '');
    
    const credentialScope = `${dateStamp}/${config.region}/s3/aws4_request`;
    const credential = `${config.accessKeyId}/${credentialScope}`;
    
    const baseUrl = `https://${config.accountId}.r2.cloudflarestorage.com/${config.bucketName}/${fileName}`;
    
    const queryParams = new URLSearchParams({
        'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
        'X-Amz-Credential': credential,
        'X-Amz-Date': amzDate,
        'X-Amz-Expires': expiresIn.toString(),
        'X-Amz-SignedHeaders': 'host'
    });
    
    const url = new URL(`${baseUrl}?${queryParams.toString()}`);
    
    const headers = {
        'host': url.hostname
    };
    
    const signature = createSignature(
        'GET',
        url,
        headers,
        '',
        config.accessKeyId,
        config.secretAccessKey,
        config.region,
        's3',
        timestamp
    );
    
    queryParams.set('X-Amz-Signature', signature);
    
    return `${baseUrl}?${queryParams.toString()}`;
}

// Генерация ссылки для тестового файла
const fileName = 'test-upload.txt';
const presignedUrl = createPresignedUrl(fileName, 3600); // Действует 1 час

console.log('🔗 Предподписанная ссылка на тестовый файл:');
console.log(presignedUrl);
console.log('');
console.log('⏰ Ссылка действительна в течение 1 часа');

// Также создадим простую публичную ссылку (если бакет настроен как публичный)
const publicUrl = `https://pub-${config.accountId}.r2.dev/${fileName}`;
console.log('');
console.log('🌐 Публичная ссылка (если бакет настроен как публичный):');
console.log(publicUrl);
