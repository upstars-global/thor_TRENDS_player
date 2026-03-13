mkdir -p public/video/posters
for f in public/video/h264/*.mp4; do
  filename=$(basename "$f")
  out="public/video/posters/${filename%.*}.webp"
  ffmpeg -y -i "$f" -ss 0 -vframes 1 -c:v libwebp -qscale:v 60 -compression_level 6 "$out"
done