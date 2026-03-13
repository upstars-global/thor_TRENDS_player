export interface Game {
  name: string;
  regions: {
    au?: {
      game_slug: string;
      provider: string;
      provider_slug: string;
    };
    global?: {
      game_slug: string;
      provider: string;
      provider_slug: string;
    };
  };
  src: string;
  supportedCurrencies: {
    au?: string[] | 'all';
    global?: string[] | 'all';
  };
  no_demo?: boolean;
  external_link?: {
    url: string;
    localeKey: string;
  };
  dont_hide?: boolean;
}

// Полный список данных о всех играх
export const gamesData: Game[] = [
  {
    name: 'Booming Fruits 256',
    regions: {
      au: {
        game_slug: 'booming_fruits_256',
        provider: '1spin4win',
        provider_slug: '1spin4win',
      },
      global: {
        game_slug: 'booming_fruits_256',
        provider: '1spin4win',
        provider_slug: '1spin4win',
      }
    },
    src: 'booming_fruits_256',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
  },
  {
    name: 'Gold Oktoberfest',
    regions: {
      au: {
        game_slug: 'gold_oktoberfest',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      },
      global: {
        game_slug: 'gold_oktoberfest',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      }
    },
    src: 'gold_oktoberfest',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
  },
  {
    name: 'Bonanza Trillion',
    regions: {
      au: {
        game_slug: 'bonanza_trillion',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      },
      global: {
        game_slug: 'bonanza_trillion',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      }
    },
    src: 'bonanza_trillion',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
  },
  {
    name: 'Jiggly Joker',
    regions: {
      au: {
        game_slug: 'jiggly_joker',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      },
      global: {
        game_slug: 'jiggly_joker',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      }
    },
    src: 'jiggly_joker',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
  },
  {
    name: 'Angry Tiki Doublemax',
    regions: {
      au: {
        game_slug: 'angry_tiki_doublemax',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      },
      global: {
        game_slug: 'angry_tiki_doublemax',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      }
    },
    src: 'angry_tiki_doublemax',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
  },
  {
    name: 'Scratch the Bank',
    regions: {
      au: {
        game_slug: 'scratch_the_bank',
        provider: 'Mascot',
        provider_slug: 'mascot',
      },
      global: {
        game_slug: 'scratch_the_bank',
        provider: 'Mascot',
        provider_slug: 'mascot',
      }
    },
    src: 'scratch_the_bank',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
  },
  {
    name: 'Hotfire Diamonds',
    regions: {
      au: {
        game_slug: 'hotfire_diamonds',
        provider: 'Enjoy Gaming',
        provider_slug: 'enjoygaming_',
      },
      global: {
        game_slug: 'hotfire_diamonds',
        provider: 'Enjoy Gaming',
        provider_slug: 'enjoygaming_',
      }
    },
    src: 'hotfire_diamonds',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
  },
  {
    name: 'Coins of Ra Power Deluxe - Hold & Win',
    regions: {
      au: {
        game_slug: 'coins_of_ra_power_deluxe_hold_and_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      },
      global: {
        game_slug: 'coins_of_ra_power_deluxe_hold_and_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      }
    },
    src: 'coins_of_ra_power_deluxe_hold_and_win',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
  },
  {
    name: 'Speed Freaks',
    regions: {
      au: {
        game_slug: 'speed_freaks',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      },
      global: {
        game_slug: 'speed_freaks',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      }
    },
    src: 'speed_freaks',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
  },
  {
    name: 'Steam Wilds Megaways',
    regions: {
      au: {
        game_slug: 'steam_wilds',
        provider: 'ThunderSpin',
        provider_slug: 'thunderspin',
      },
      global: {
        game_slug: 'steam_wilds',
        provider: 'ThunderSpin',
        provider_slug: 'thunderspin',
      }
    },
    src: 'steam_wilds',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
  },
  {
    name: 'Live Roulette French',
    regions: {
      au: {
        game_slug: 'live_roulette_french_vip',
        provider: 'Platipus Live',
        provider_slug: 'platipus_live',
      },
      global: {
        game_slug: 'live_roulette_french_vip',
        provider: 'Platipus Live',
        provider_slug: 'platipus_live',
      }
    },
    src: 'live_roulette_french_vip',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Playful Kitten buy feature',
    regions: {
      au: {
        game_slug: 'playful_kitten_buy_feature',
        provider: 'KA Gaming',
        provider_slug: 'kagaming',
      },
      global: {
        game_slug: 'playful_kitten_buy_feature',
        provider: 'KA Gaming',
        provider_slug: 'kagaming',
      }
    },
    src: 'playful_kitten_buy_feature',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Joker vs Joker',
    regions: {
      au: {
        game_slug: 'joker_vs_joker',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      },
      global: {
        game_slug: 'joker_vs_joker',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      }
    },
    src: 'joker_vs_joker',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Candy stash deluxe',
    regions: {
      au: {
        game_slug: 'candy_stash_deluxe',
        provider: 'Zillion',
        provider_slug: 'zillion',
      },
      global: {
        game_slug: 'candy_stash_deluxe',
        provider: 'Zillion',
        provider_slug: 'zillion',
      }
    },
    src: 'candy_stash_deluxe',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Wild Classic',
    regions: {
      au: {
        game_slug: 'wild_classic',
        provider: 'Platipus',
        provider_slug: 'platipus',
      },
      global: {
        game_slug: 'wild_classic',
        provider: 'Platipus',
        provider_slug: 'platipus',
      }
    },
    src: 'wild_classic',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Frontier lock and load',
    regions: {
      au: {
        game_slug: 'frontier_lock_and_load',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      },
      global: {
        game_slug: 'frontier_lock_and_load',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      }
    },
    src: 'frontier_lock_and_load',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Dolphin`s Wealth fortune',
    regions: {
      au: {
        game_slug: 'dolphins_wealth_fortune',
        provider: '1spin4win',
        provider_slug: '1spin4win',
      },
      global: {
        game_slug: 'dolphins_wealth_fortune',
        provider: '1spin4win',
        provider_slug: '1spin4win',
      }
    },
    src: 'dolphins_wealth_fortune',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: '3 pots of lunar wolf hold and win',
    regions: {
      au: {
        game_slug: '3_pots_of_lunar_wolf_hold_and_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      },
      global: {
        game_slug: '3_pots_of_lunar_wolf_hold_and_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      }
    },
    src: '3_pots_of_lunar_wolf_hold_and_win',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Lucky Scarab Claw',
    regions: {
      au: {
        game_slug: 'lucky_scarab_claw_wild_respins',
        provider: 'Clawbuster',
        provider_slug: 'clawbuster',
      },
      global: {
        game_slug: 'lucky_scarab_claw_wild_respins',
        provider: 'Clawbuster',
        provider_slug: 'clawbuster',
      }
    },
    src: 'lucky_scarab_claw_wild_respins',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Bank maker',
    regions: {
      au: {
        game_slug: 'bank_maker',
        provider: 'Mancala',
        provider_slug: 'mancala',
      },
      global: {
        game_slug: 'bank_maker',
        provider: 'Mancala',
        provider_slug: 'mancala',
      }
    },
    src: 'bank_maker',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: '3×5 Hold the Spin',
    regions: {
      au: {
        game_slug: '3x5_hold_the_spin',
        provider: 'Gamzix',
        provider_slug: 'gamzix',
      },
      global: {
        game_slug: '3x5_hold_the_spin',
        provider: 'Gamzix',
        provider_slug: 'gamzix',
      }
    },
    src: '3x5_hold_the_spin',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Knock Knock',
    regions: {
      au: {
        game_slug: 'knock_knock',
        provider: 'Iconic21 Slots',
        provider_slug: 'iconic21_slots',
      },
      global: {
        game_slug: 'knock_knock',
        provider: 'Iconic21 Slots',
        provider_slug: 'iconic21_slots',
      }
    },
    src: 'knock_knock',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Wonder 7s',
    regions: {
      au: {
        game_slug: 'wonder_7s',
        provider: 'Casino Technology Interactive',
        provider_slug: 'technology',
      },
      global: {
        game_slug: 'wonder_7s',
        provider: 'Casino Technology Interactive',
        provider_slug: 'technology',
      }
    },
    src: 'wonder_7s',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Magic Treasures',
    regions: {
      au: {
        game_slug: 'magic_treasures',
        provider: 'Zillion',
        provider_slug: 'zillion',
      },
      global: {
        game_slug: 'magic_treasures',
        provider: 'Zillion',
        provider_slug: 'zillion',
      }
    },
    src: 'magic_treasures',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Allways Egypt Fortune',
    regions: {
      au: {
        game_slug: 'allways_egypt_fortune',
        provider: '1spin4win',
        provider_slug: '1spin4win',
      },
      global: {
        game_slug: 'allways_egypt_fortune',
        provider: '1spin4win',
        provider_slug: '1spin4win',
      }
    },
    src: 'allways_egypt_fortune',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Wild Kangaroo Spins',
    regions: {
      au: {
        game_slug: 'wild_kangaroo_spins',
        provider: 'Reevo',
        provider_slug: 'reevo',
      },
      global: {
        game_slug: 'wild_kangaroo_spins',
        provider: 'Reevo',
        provider_slug: 'reevo',
      }
    },
    src: 'wild_kangaroo_spins',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Ink Painting Master',
    regions: {
      au: {
        game_slug: 'ink_painting_master',
        provider: 'KA Gaming',
        provider_slug: 'kagaming',
      },
      global: {
        game_slug: 'ink_painting_master',
        provider: 'KA Gaming',
        provider_slug: 'kagaming',
      }
    },
    src: 'ink_painting_master',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Diamond Chest Hold N Link',
    regions: {
      au: {
        game_slug: 'diamond_chest_hold_n_link',
        provider: 'NetGame',
        provider_slug: 'netgame',
      },
      global: {
        game_slug: 'diamond_chest_hold_n_link',
        provider: 'NetGame',
        provider_slug: 'netgame',
      }
    },
    src: 'diamond_chest_hold_n_link',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Sweet Crumbles',
    regions: {
      au: {
        game_slug: 'sweet_crumbles',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      },
      global: {
        game_slug: 'sweet_crumbles',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      }
    },
    src: 'sweet_crumbles',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Fruitjitsu',
    regions: {
      au: {
        game_slug: 'fruitjitsu',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      },
      global: {
        game_slug: 'fruitjitsu',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      }
    },
    src: 'fruitjitsu',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Diegos Spicy Truck',
    regions: {
      au: {
        game_slug: 'diegos_spicy_truck',
        provider: 'Mancala',
        provider_slug: 'mancala',
      },
      global: {
        game_slug: 'diegos_spicy_truck',
        provider: 'Mancala',
        provider_slug: 'mancala',
      }
    },
    src: 'diegos_spicy_truck',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Cats Soup',
    regions: {
      au: {
        game_slug: 'cats_soup',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      },
      global: {
        game_slug: 'cats_soup',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      }
    },
    src: 'cats_soup',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Veracruz Wild',
    regions: {
      au: {
        game_slug: 'veracruz_wild',
        provider: 'Popiplay',
        provider_slug: 'popiplay',
      },
      global: {
        game_slug: 'veracruz_wild',
        provider: 'Popiplay',
        provider_slug: 'popiplay',
      }
    },
    src: 'veracruz_wild',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Her Genie Ways',
    regions: {
      au: {
        game_slug: 'her_genie_ways',
        provider: 'Reevo',
        provider_slug: 'reevo',
      },
      global: {
        game_slug: 'her_genie_ways',
        provider: 'Reevo',
        provider_slug: 'reevo',
      }
    },
    src: 'her_genie_ways',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Power Gems',
    regions: {
      au: {
        game_slug: 'power_gems',
        provider: 'Enjoy Gaming',
        provider_slug: 'enjoygaming_',
      },
      global: {
        game_slug: 'power_gems',
        provider: 'Enjoy Gaming',
        provider_slug: 'enjoygaming_',
      }
    },
    src: 'power_gems',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Reel the Groove',
    regions: {
      au: {
        game_slug: 'reel_the_groove',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      },
      global: {
        game_slug: 'reel_the_groove',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      }
    },
    src: 'reel_the_groove',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Diamond style',
    regions: {
      au: {
        game_slug: 'diamond_style',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      },
      global: {
        game_slug: 'diamond_style',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      }
    },
    src: 'diamond_style',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Hong Yun Bao Ultra Bonus',
    regions: {
      au: {
        game_slug: 'hong_yun_bao_ultra_bonus',
        provider: 'Zephyr Slots',
        provider_slug: 'zephyr_slots',
      },
      global: {
        game_slug: 'hong_yun_bao_ultra_bonus',
        provider: 'Zephyr Slots',
        provider_slug: 'zephyr_slots',
      }
    },
    src: 'hong_yun_bao_ultra_bonus',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Savannah Spins',
    regions: {
      au: {
        game_slug: 'savannah_spins',
        provider: 'Thunderspin',
        provider_slug: 'thunderspin',
      },
      global: {
        game_slug: 'savannah_spins',
        provider: 'Thunderspin',
        provider_slug: 'thunderspin',
      }
    },
    src: 'savannah_spins',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Sticky Fruitstorm',
    regions: {
      au: {
        game_slug: 'sticky_fruitstorm',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      },
      global: {
        game_slug: 'sticky_fruitstorm',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      }
    },
    src: 'sticky_fruitstorm',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Chicken Road 2.0',
    regions: {
      au: {
        game_slug: 'chicken_road_2_0',
        provider: 'InOUT',
        provider_slug: 'inout',
      },
      global: {
        game_slug: 'chicken_road_2_0',
        provider: 'InOUT',
        provider_slug: 'inout',
      }
    },
    src: 'chicken_road_2_0',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Red Planet: Rapid Link',
    regions: {
      au: {
        game_slug: 'red_planet_rapid_link',
        provider: 'NetGame',
        provider_slug: 'netgame',
      },
      global: {
        game_slug: 'red_planet_rapid_link',
        provider: 'NetGame',
        provider_slug: 'netgame',
      }
    },
    src: 'red_planet_rapid_link',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Evil Bet Shoot Them All',
    regions: {
      au: {
        game_slug: 'evil_bet_shoot_them_all',
        provider: 'Mascot',
        provider_slug: 'mascot',
      },
      global: {
        game_slug: 'evil_bet_shoot_them_all',
        provider: 'Mascot',
        provider_slug: 'mascot',
      }
    },
    src: 'evil_bet_shoot_them_all',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Coins of Leprecaun Hold And Win',
    regions: {
      au: {
        game_slug: 'coins_of_leprecaun_hold_and_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      },
      global: {
        game_slug: 'coins_of_leprecaun_hold_and_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      }
    },
    src: 'coins_of_leprecaun_hold_and_win',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Double Joker: Fever',
    regions: {
      au: {
        game_slug: 'double_joker_fever_',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      },
      global: {
        game_slug: 'double_joker_fever_',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      }
    },
    src: 'double_joker_fever_',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Lock n Load',
    regions: {
      au: {
        game_slug: 'lock_n_load',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      },
      global: {
        game_slug: 'lock_n_load',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      }
    },
    src: 'lock_n_load',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Baccarat 4',
    regions: {
      au: {
        game_slug: 'baccarat_4',
        provider: 'Luckystreak',
        provider_slug: 'luckystreak',
      },
      global: {
        game_slug: 'baccarat_4',
        provider: 'Luckystreak',
        provider_slug: 'luckystreak',
      }
    },
    src: 'baccarat_4',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Johns book',
    regions: {
      au: {
        game_slug: 'johns_book',
        provider: 'ELA Games',
        provider_slug: 'ela_gaming',
      },
      global: {
        game_slug: 'johns_book',
        provider: 'ELA Games',
        provider_slug: 'ela_gaming',
      }
    },
    src: 'johns_book',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Cash Crab Fancy Faces',
    regions: {
      au: {
        game_slug: 'cash_crab_fancy_faces',
        provider: 'ELA Games Live',
        provider_slug: 'ela_gaming_live',
      },
      global: {
        game_slug: 'cash_crab_fancy_faces',
        provider: 'ELA Games Live',
        provider_slug: 'ela_gaming_live',
      }
    },
    src: 'cash_crab_fancy_faces',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Fireball fury hot bonus',
    regions: {
      au: {
        game_slug: 'fireball_fury_hot_bonus',
        provider: 'Fugaso',
        provider_slug: 'fugaso',
      },
      global: {
        game_slug: 'fireball_fury_hot_bonus',
        provider: 'Fugaso',
        provider_slug: 'fugaso',
      }
    },
    src: 'fireball_fury_hot_bonus',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Squidssgame',
    regions: {
      au: {
        game_slug: 'squidssgame',
        provider: 'InOut',
        provider_slug: 'inout',
      },
      global: {
        game_slug: 'squidssgame',
        provider: 'InOut',
        provider_slug: 'inout',
      }
    },
    src: 'squidssgame',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Meta crash',
    regions: {
      au: {
        game_slug: 'meta_crash',
        provider: '100HP Gaming',
        provider_slug: '100hp_gaming',
      },
      global: {
        game_slug: 'meta_crash',
        provider: '100HP Gaming',
        provider_slug: '100hp_gaming',
      }
    },
    src: 'meta_crash',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Texas rush',
    regions: {
      au: {
        game_slug: 'texas_rush',
        provider: 'NetGame',
        provider_slug: 'netgame',
      },
      global: {
        game_slug: 'texas_rush',
        provider: 'NetGame',
        provider_slug: 'netgame',
      }
    },
    src: 'texas_rush',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Snoop Dogg Dollars',
    regions: {
      au: {
        game_slug: 'snoop_dogg_dollars',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      },
      global: {
        game_slug: 'snoop_dogg_dollars',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      }
    },
    src: 'snoop_dogg_dollars',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Enchanted Forest',
    regions: {
      au: {
        game_slug: 'enchanted_forest_',
        provider: 'Enjoy Gaming',
        provider_slug: 'enjoygaming',
      },
      global: {
        game_slug: 'enchanted_forest_',
        provider: 'Enjoy Gaming',
        provider_slug: 'enjoygaming',
      }
    },
    src: 'enchanted_forest_',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Cosmo classic',
    regions: {
      au: {
        game_slug: 'cosmo_classic',
        provider: 'Orbital',
        provider_slug: 'orbital',
      },
      global: {
        game_slug: 'cosmo_classic',
        provider: 'Orbital',
        provider_slug: 'orbital',
      }
    },
    src: 'cosmo_classic',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Dual Fruity Fruits',
    regions: {
      au: {
        game_slug: 'dual_fruity_fruits',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      },
      global: {
        game_slug: 'dual_fruity_fruits',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      }
    },
    src: 'dual_fruity_fruits',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Roby Dick',
    regions: {
      au: {
        game_slug: 'roby_dick',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      },
      global: {
        game_slug: 'roby_dick',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      }
    },
    src: 'roby_dick',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Pots of Great Fortune Hold And Win',
    regions: {
      au: {
        game_slug: 'pots_of_great_fortune_hold_and_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      },
      global: {
        game_slug: 'pots_of_great_fortune_hold_and_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      }
    },
    src: 'pots_of_great_fortune_hold_and_win',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Piggy Thief',
    regions: {
      au: {
        game_slug: 'piggy_thief',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      },
      global: {
        game_slug: 'piggy_thief',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      }
    },
    src: 'piggy_thief',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Pharaohs Sun',
    regions: {
      au: {
        game_slug: 'pharaohs_sun',
        provider: 'Zillion',
        provider_slug: 'zillion',
      },
      global: {
        game_slug: 'pharaohs_sun',
        provider: 'Zillion',
        provider_slug: 'zillion',
      }
    },
    src: 'pharaohs_sun',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Bison Horizon Hold and Win',
    regions: {
      au: {
        game_slug: 'bison_horizon_hold_and_win',
        provider: 'Popiplay',
        provider_slug: 'popiplay',
      },
      global: {
        game_slug: 'bison_horizon_hold_and_win',
        provider: 'Popiplay',
        provider_slug: 'popiplay',
      }
    },
    src: 'bison_horizon_hold_and_win',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Mania Vegas Flowin',
    regions: {
      au: {
        game_slug: 'mania_vegas_flowin',
        provider: 'KA Gaming',
        provider_slug: 'kagaming',
      },
      global: {
        game_slug: 'mania_vegas_flowin',
        provider: 'KA Gaming',
        provider_slug: 'kagaming',
      }
    },
    src: 'mania_vegas_flowin',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Zeus Power',
    regions: {
      au: {
        game_slug: 'zeus_power',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      },
      global: {
        game_slug: 'zeus_power',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      }
    },
    src: 'zeus_power',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Crystalium',
    regions: {
      au: {
        game_slug: 'crystalium',
        provider: 'Swintt',
        provider_slug: 'swintt',
      },
      global: {
        game_slug: 'crystalium',
        provider: 'Swintt',
        provider_slug: 'swintt',
      }
    },
    src: 'crystalium',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Wild Joker Blitz',
    regions: {
      au: {
        game_slug: 'wild_joker_blitz',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      },
      global: {
        game_slug: 'wild_joker_blitz',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      }
    },
    src: 'wild_joker_blitz',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Money Booster',
    regions: {
      au: {
        game_slug: 'money_booster',
        provider: 'Mancala',
        provider_slug: 'mancala',
      },
      global: {
        game_slug: 'money_booster',
        provider: 'Mancala',
        provider_slug: 'mancala',
      }
    },
    src: 'money_booster',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Hotfire Coins 2',
    regions: {
      au: {
        game_slug: 'hotfire_coins_2',
        provider: 'Enjoy Gaming',
        provider_slug: 'enjoygaming_',
      },
      global: {
        game_slug: 'hotfire_coins_2',
        provider: 'Enjoy Gaming',
        provider_slug: 'enjoygaming_',
      }
    },
    src: 'hotfire_coins_2',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Bluffy Cat',
    regions: {
      au: {
        game_slug: 'bluffy_cat',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      },
      global: {
        game_slug: 'bluffy_cat',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      }
    },
    src: 'bluffy_cat',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Golden Magic Beans',
    regions: {
      au: {
        game_slug: 'golden_magic_beans',
        provider: 'KA Gaming',
        provider_slug: 'kagaming',
      },
      global: {
        game_slug: 'golden_magic_beans',
        provider: 'KA Gaming',
        provider_slug: 'kagaming',
      }
    },
    src: 'golden_magic_beans',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Viking Rush',
    regions: {
      au: {
        game_slug: 'viking_rush',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      },
      global: {
        game_slug: 'viking_rush',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      }
    },
    src: 'viking_rush',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Winspirit Auto Roulette',
    regions: {
      au: {
        game_slug: 'winspirit_auto_roulette',
        provider: 'Winfinity',
        provider_slug: 'winfinity',
      },
      global: {
        game_slug: 'winspirit_auto_roulette',
        provider: 'Winfinity',
        provider_slug: 'winfinity',
      }
    },
    src: 'winspirit_auto_roulette',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Caishen Gold: Infinity Dragon',
    regions: {
      au: {
        game_slug: 'caishen_gold_infinity_dragon',
        provider: 'Mancala',
        provider_slug: 'mancala',
      },
      global: {
        game_slug: 'caishen_gold_infinity_dragon',
        provider: 'Mancala',
        provider_slug: 'mancala',
      }
    },
    src: 'caishen_gold_infinity_dragon',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Robin the Fair',
    regions: {
      au: {
        game_slug: 'robin_the_fair',
        provider: 'Imagine Live',
        provider_slug: 'imagine_live',
      },
      global: {
        game_slug: 'robin_the_fair',
        provider: 'Imagine Live',
        provider_slug: 'imagine_live',
      }
    },
    src: 'robin_the_fair',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Coins of Alkemor Extreme Magic Hold and Win',
    regions: {
      au: {
        game_slug: 'coins_of_alkemor_extreme_magic_hold_snd_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      },
      global: {
        game_slug: 'coins_of_alkemor_extreme_magic_hold_snd_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      }
    },
    src: 'coins_of_alkemor_extreme_magic_hold_snd_win',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Wasteland Riches',
    regions: {
      au: {
        game_slug: 'wasteland_riches',
        provider: 'Mascot',
        provider_slug: 'mascot',
      },
      global: {
        game_slug: 'wasteland_riches',
        provider: 'Mascot',
        provider_slug: 'mascot',
      }
    },
    src: 'wasteland_riches',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Cabaret Roulette',
    regions: {
      au: {
        game_slug: 'cabaret_roulette',
        provider: 'Winfinity',
        provider_slug: 'winfinity',
      },
      global: {
        game_slug: 'cabaret_roulette',
        provider: 'Winfinity',
        provider_slug: 'winfinity',
      }
    },
    src: 'cabaret_roulette',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Olympigs',
    regions: {
      au: {
        game_slug: 'olympigs',
        provider: 'Gamebeat',
        provider_slug: 'gamebeat',
      },
      global: {
        game_slug: 'olympigs',
        provider: 'Gamebeat',
        provider_slug: 'gamebeat',
      }
    },
    src: 'olympigs',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Aztec Gigablox',
    regions: {
      au: {
        game_slug: 'aztec_gigablox',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      },
      global: {
        game_slug: 'aztec_gigablox',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      }
    },
    src: 'aztec_gigablox',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Cash Crab',
    regions: {
      au: {
        game_slug: 'cash_crab',
        provider: 'ELA Games Live',
        provider_slug: 'ela_gaming_live',
      },
      global: {
        game_slug: 'cash_crab',
        provider: 'ELA Games Live',
        provider_slug: 'ela_gaming_live',
      }
    },
    src: 'cash_crab',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Egypt King Pearl Upgrade',
    regions: {
      au: {
        game_slug: 'egypt_king_pearl_upgrade',
        provider: 'Swintt',
        provider_slug: 'swintt',
      },
      global: {
        game_slug: 'egypt_king_pearl_upgrade',
        provider: 'Swintt',
        provider_slug: 'swintt',
      }
    },
    src: 'egypt_king_pearl_upgrade',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Thunder Fruits',
    regions: {
      au: {
        game_slug: 'thunder_fruits',
        provider: 'Thunderspin',
        provider_slug: 'thunderspin',
      },
      global: {
        game_slug: 'thunder_fruits',
        provider: 'Thunderspin',
        provider_slug: 'thunderspin',
      }
    },
    src: 'thunder_fruits',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Cash Crab',
    regions: {
      au: {
        game_slug: 'cash_crab_football',
        provider: 'ELA Games Live',
        provider_slug: 'ela_gaming_live',
      },
      global: {
        game_slug: 'cash_crab_football',
        provider: 'ELA Games Live',
        provider_slug: 'ela_gaming_live',
      }
    },
    src: 'cash_crab_football',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Mega Hamster',
    regions: {
      au: {
        game_slug: 'mega_hamster',
        provider: 'Amarix',
        provider_slug: 'amarix',
      },
      global: {
        game_slug: 'mega_hamster',
        provider: 'Amarix',
        provider_slug: 'amarix',
      }
    },
    src: 'mega_hamster',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Island Desire Hold And Win',
    regions: {
      au: {
        game_slug: 'island_desire_hold_and_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      },
      global: {
        game_slug: 'island_desire_hold_and_win',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      }
    },
    src: 'island_desire_hold_and_win',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Sugar Mix',
    regions: {
      au: {
        game_slug: 'sugar_mix',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      },
      global: {
        game_slug: 'sugar_mix',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      }
    },
    src: 'sugar_mix',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Tessa Hunt and the Eye of Hours',
    regions: {
      au: {
        game_slug: 'tessa_hunt_and_the_eye_of_hours',
        provider: 'Mascot',
        provider_slug: 'mascot',
      },
      global: {
        game_slug: 'tessa_hunt_and_the_eye_of_hours',
        provider: 'Mascot',
        provider_slug: 'mascot',
      }
    },
    src: 'tessa_hunt_and_the_eye_of_hours',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Gravity Auto Roulette',
    regions: {
      au: {
        game_slug: 'gravity_auto_roulette',
        provider: 'Iconic21 Live',
        provider_slug: 'iconic21',
      },
      global: {
        game_slug: 'gravity_auto_roulette',
        provider: 'Iconic21 Live',
        provider_slug: 'iconic21',
      }
    },
    src: 'gravity_auto_roulette',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Crash Live',
    regions: {
      au: {
        game_slug: 'crash_live',
        provider: 'Iconic21 Live',
        provider_slug: 'iconic21',
      },
      global: {
        game_slug: 'crash_live',
        provider: 'Iconic21 Live',
        provider_slug: 'iconic21',
      }
    },
    src: 'crash_live',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Diamond Mines',
    regions: {
      au: {
        game_slug: 'bts_diamond_mines',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      },
      global: {
        game_slug: 'bts_diamond_mines',
        provider: 'Betsoft',
        provider_slug: 'betsoft',
      }
    },
    src: 'bts_diamond_mines',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Emojinator',
    regions: {
      au: {
        game_slug: 'emojinator',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      },
      global: {
        game_slug: 'emojinator',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      }
    },
    src: 'emojinator',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Roulette Rouge',
    regions: {
      au: {
        game_slug: 'roulette_rouge',
        provider: 'Imagine Live',
        provider_slug: 'imagine_live',
      },
      global: {
        game_slug: 'roulette_rouge',
        provider: 'Imagine Live',
        provider_slug: 'imagine_live',
      }
    },
    src: 'roulette_rouge',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Neon Fruits',
    regions: {
      au: {
        game_slug: 'neon_fruits',
        provider: 'Popiplay',
        provider_slug: 'popiplay',
      },
      global: {
        game_slug: 'neon_fruits',
        provider: 'Popiplay',
        provider_slug: 'popiplay',
      }
    },
    src: 'neon_fruits',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Thunder pliko',
    regions: {
      au: {
        game_slug: 'thunder_pliko',
        provider: 'Clawbuster',
        provider_slug: 'clawbuster',
      },
      global: {
        game_slug: 'thunder_pliko',
        provider: 'Clawbuster',
        provider_slug: 'clawbuster',
      }
    },
    src: 'thunder_pliko',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
  {
    name: 'Coin Flynn',
    regions: {
      au: {
        game_slug: 'coin_flynn',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      },
      global: {
        game_slug: 'coin_flynn',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      }
    },
    src: 'coin_flynn',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Flash Joker Fever',
    regions: {
      au: {
        game_slug: 'flash_joker_fever',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      },
      global: {
        game_slug: 'flash_joker_fever',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      }
    },
    src: 'flash_joker_fever',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: '10000 X Gold',
    regions: {
      au: {
        game_slug: '10000_x_gold',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      },
      global: {
        game_slug: '10000_x_gold',
        provider: 'Yggdrasil',
        provider_slug: 'yggdrasil',
      }
    },
    src: '10000_x_gold',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Zeus Run',
    regions: {
      au: {
        game_slug: 'zeus_run',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      },
      global: {
        game_slug: 'zeus_run',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      }
    },
    src: 'zeus_run',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Supa Crew',
    regions: {
      au: {
        game_slug: 'supa_crew',
        provider: 'Swintt',
        provider_slug: 'swintt',
      },
      global: {
        game_slug: 'supa_crew',
        provider: 'Swintt',
        provider_slug: 'swintt',
      }
    },
    src: 'supa_crew',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Hot Chilli Joker',
    regions: {
      au: {
        game_slug: 'hot_chilli_joker',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      },
      global: {
        game_slug: 'hot_chilli_joker',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      }
    },
    src: 'hot_chilli_joker',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Hotfire Coins',
    regions: {
      au: {
        game_slug: 'hotfire_coins',
        provider: 'Enjoy Gaming Slots',
        provider_slug: 'enjoygaming_',
      },
      global: {
        game_slug: 'hotfire_coins',
        provider: 'Enjoy Gaming Slots',
        provider_slug: 'enjoygaming_',
      }
    },
    src: 'hotfire_coins',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Golden Bull',
    regions: {
      au: {
        game_slug: 'golden_bull',
        provider: 'KA Gaming',
        provider_slug: 'kagaming',
      },
      global: {
        game_slug: 'golden_bull',
        provider: 'KA Gaming',
        provider_slug: 'kagaming',
      }
    },
    src: 'golden_bull',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: '3 Mariachi',
    regions: {
      au: {
        game_slug: '3_mariachi_hold_and_win',
        provider: 'Enjoy gaming',
        provider_slug: 'enjoygaming_',
      },
      global: {
        game_slug: '3_mariachi_hold_and_win',
        provider: 'Enjoy gaming',
        provider_slug: 'enjoygaming_',
      }
    },
    src: '3_mariachi_hold_and_win',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'The Great Clawsby Deluxe Hold and Win',
    regions: {
      au: {
        game_slug: 'the_great_clawsby_deluxe_hold_and_win',
        provider: 'Clawbuster',
        provider_slug: 'clawbuster',
      },
      global: {
        game_slug: 'the_great_clawsby_deluxe_hold_and_win',
        provider: 'Clawbuster',
        provider_slug: 'clawbuster',
      }
    },
    src: 'the_great_clawsby_deluxe_hold_and_win',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Ruby Royal',
    regions: {
      au: {
        game_slug: 'ruby_royal',
        provider: 'Popiplay',
        provider_slug: 'popiplay',
      },
      global: {
        game_slug: 'ruby_royal',
        provider: 'Popiplay',
        provider_slug: 'popiplay',
      }
    },
    src: 'ruby_royal',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Piggy Collect And Multiply',
    regions: {
      au: {
        game_slug: 'piggy_collect_and_multiply',
        provider: 'Apparat Gaming',
        provider_slug: 'apparat',
      },
      global: {
        game_slug: 'piggy_collect_and_multiply',
        provider: 'Apparat Gaming',
        provider_slug: 'apparat',
      }
    },
    src: 'piggy_collect_and_multiply',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Chicken Road',
    regions: {
      au: {
        game_slug: 'chicken_road',
        provider: 'InOUT',
        provider_slug: 'inout',
      },
      global: {
        game_slug: 'chicken_road',
        provider: 'InOUT',
        provider_slug: 'inout',
      }
    },
    src: 'chicken_road',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Persian Riches',
    regions: {
      au: {
        game_slug: 'persian_riches',
        provider: 'Zephyr Slots',
        provider_slug: 'zephyr_slots',
      },
      global: {
        game_slug: 'persian_riches',
        provider: 'Zephyr Slots',
        provider_slug: 'zephyr_slots',
      }
    },
    src: 'persian_riches',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Pyramids Deluxe',
    regions: {
      au: {
        game_slug: 'pyramids_deluxe',
        provider: 'Thunderspin',
        provider_slug: 'thunderspin',
      },
      global: {
        game_slug: 'pyramids_deluxe',
        provider: 'Thunderspin',
        provider_slug: 'thunderspin',
      }
    },
    src: 'pyramids_deluxe',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Juicy wheel',
    regions: {
      au: {
        game_slug: 'juicy_wheel',
        provider: 'Platipus',
        provider_slug: 'platipus',
      },
      global: {
        game_slug: 'juicy_wheel',
        provider: 'Platipus',
        provider_slug: 'platipus',
      }
    },
    src: 'juicy_wheel',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Retro Pedro',
    regions: {
      au: {
        game_slug: 'retro_pedro',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      },
      global: {
        game_slug: 'retro_pedro',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      }
    },
    src: 'retro_pedro',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Blast the Bass',
    regions: {
      au: {
        game_slug: 'blast_the_bass',
        provider: 'Belatra',
        provider_slug: 'belatra',
      },
      global: {
        game_slug: 'blast_the_bass',
        provider: 'Belatra',
        provider_slug: 'belatra',
      }
    },
    src: 'blast_the_bass',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: '3 Fortune Trees',
    regions: {
      au: {
        game_slug: '3_fortune_trees',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      },
      global: {
        game_slug: '3_fortune_trees',
        provider: 'Kendoo',
        provider_slug: 'kendoo',
      }
    },
    src: '3_fortune_trees',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Frontier Gold Cash Pool',
    regions: {
      au: {
        game_slug: 'frontier_gold_cash_pool',
        provider: 'NetGame',
        provider_slug: 'netgame',
      },
      global: {
        game_slug: 'frontier_gold_cash_pool',
        provider: 'NetGame',
        provider_slug: 'netgame',
      }
    },
    src: 'frontier_gold_cash_pool',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Lady Wolf Moon',
    regions: {
      au: {
        game_slug: 'lucky_wolf_moon',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      },
      global: {
        game_slug: 'lucky_wolf_moon',
        provider: 'Bgaming',
        provider_slug: 'bgaming',
      }
    },
    src: 'lucky_wolf_moon',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Egypt Crystals',
    regions: {
      au: {
        game_slug: 'egypt_crystals',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      },
      global: {
        game_slug: 'egypt_crystals',
        provider: 'Dream Play',
        provider_slug: 'dream_play',
      }
    },
    src: 'egypt_crystals',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Mega Lucky Cashout',
    regions: {
      au: {
        game_slug: 'mega_lucky_cashout',
        provider: '1spin4win',
        provider_slug: '1spin4win',
      },
      global: {
        game_slug: 'mega_lucky_cashout',
        provider: '1spin4win',
        provider_slug: '1spin4win',
      }
    },
    src: 'mega_lucky_cashout',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'The Biggest win x50',
    regions: {
      au: {
        game_slug: 'the_biggest_win_x50',
        provider: 'Mascot',
        provider_slug: 'mascot',
      },
      global: {
        game_slug: 'the_biggest_win_x50',
        provider: 'Mascot',
        provider_slug: 'mascot',
      }
    },
    src: 'the_biggest_win_x50',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Indian Adventure',
    regions: {
      au: {
        game_slug: 'indian_adventure',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      },
      global: {
        game_slug: 'indian_adventure',
        provider: 'Onlyplay',
        provider_slug: 'onlyplay',
      }
    },
    src: 'indian_adventure',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     }
  },
  {
    name: 'Wonder Wheel',
    regions: {
      au: {
        game_slug: 'wonder_wheel',
        provider: 'Enjoy Gaming',
        provider_slug: 'enjoygaming',
      },
      global: {
        game_slug: 'wonder_wheel',
        provider: 'Enjoy Gaming',
        provider_slug: 'enjoygaming',
      }
    },
    src: 'wonder_wheel',
    supportedCurrencies: {
        au: 'all',
        global: 'all'
     },
     no_demo: true,
  },
{
name: 'Lucky Clover 243',
regions: {
  au: {
    game_slug: 'lucky_clover_243',
    provider: '1spin4win',
    provider_slug: '1spin4win',
  },
  global: {
    game_slug: 'lucky_clover_243',
    provider: '1spin4win',
    provider_slug: '1spin4win',
  }
},
src: 'lucky_clover_243',
supportedCurrencies: {
    au: 'all',
    global: 'all'
 }
},
{
name: 'King Candy',
regions: {
  au: {
    game_slug: 'king_candy',
    provider: 'Nucleus Gaming',
    provider_slug: 'nucleus',
  },
  global: {
    game_slug: 'king_candy',
    provider: 'Nucleus Gaming',
    provider_slug: 'nucleus',
  }
},
src: 'king_candy',
supportedCurrencies: {
    au: 'all',
    global: 'all'
 }
},
{
name: 'Africa Gold',
regions: {
  au: {
    game_slug: 'africa_gold',
    provider: 'Belatra',
    provider_slug: 'belatra',
  },
  global: {
    game_slug: 'africa_gold',
    provider: 'Belatra',
    provider_slug: 'belatra',
  }
},
src: 'africa_gold',
supportedCurrencies: {
    au: 'all',
    global: 'all'
 }
},
{
name: '3 Hot Chillies',
regions: {
  au: {
    game_slug: '3_hot_chillies',
    provider: 'Booongo',
    provider_slug: 'booongo',
  },
  global: {
    game_slug: '3oaks_3_hot_chillies',
    provider: '3 Oaks Gaming',
    provider_slug: '3oaks',
  }
},
src: '3_hot_chillies',
supportedCurrencies: {
  au: ['aud'],
  global: ['cad', 'eur', 'nzd', 'usd', 'inr', 'brl']
}
},
{
name: 'Da Ji Da Li',
regions: {
  au: {
    game_slug: 'da_ji_da_li',
    provider: 'Platipus',
    provider_slug: 'platipus',
  },
  global: {
    game_slug: 'da_ji_da_li',
    provider: 'Platipus',
    provider_slug: 'platipus',
  }
},
src: 'da_ji_da_li',
supportedCurrencies: {
    au: 'all',
    global: 'all'
 }
},
{
name: 'Coin Win: Hold The Spin',
regions: {
  au: {
    game_slug: 'coin_win_hold_the_spin',
    provider: 'Gamzix',
    provider_slug: 'gamzix',
  },
  global: {
    game_slug: 'coin_win_hold_the_spin',
    provider: 'Gamzix',
    provider_slug: 'gamzix',
  }
},
src: 'coin_win_hold_the_spin',
supportedCurrencies: {
    au: 'all',
    global: 'all'
 }
},
{
name: 'Chinese Luck',
regions: {
  au: {
    game_slug: 'chinese_luck',
    provider: '1spin4win',
    provider_slug: '1spin4win',
  },
  global: {
    game_slug: 'chinese_luck',
    provider: '1spin4win',
    provider_slug: '1spin4win',
  }
},
src: 'chinese_luck',
supportedCurrencies: {
    au: 'all',
    global: 'all'
 }
},
{
name: 'Striking Diamond: Running Wins',
regions: {
  au: {
    game_slug: 'striking_diamond_running_wins',
    provider: 'Fugaso',
    provider_slug: 'fugaso',
  },
  global: {
    game_slug: 'striking_diamond_running_wins',
    provider: 'Fugaso',
    provider_slug: 'fugaso',
  }
},
src: 'striking_diamond_running_wins',
supportedCurrencies: {
    au: 'all',
    global: 'all'
 }
},
{
name: 'Buffalos Sun 3',
regions: {
  au: {
    game_slug: 'buffalos_sun_3',
    provider: 'Zillion',
    provider_slug: 'zillion',
  },
  global: {
    game_slug: 'buffalos_sun_3',
    provider: 'Zillion',
    provider_slug: 'zillion',
  }
},
src: 'buffalos_sun_3',
supportedCurrencies: {
    au: 'all',
    global: 'all'
 }
},
{
name: 'Aztec Magic Megaways',
regions: {
  au: {
    game_slug: 'aztec_magic_megaways',
    provider: 'Bgaming',
    provider_slug: 'bgaming',
  },
  global: {
    game_slug: 'aztec_magic_megaways',
    provider: 'Bgaming',
    provider_slug: 'bgaming',
  }
},
src: 'aztec_magic_megaways',
supportedCurrencies: {
    au: 'all',
    global: 'all'
 }
},
{
name: 'Dogmasons MegaWOOF',
regions: {
  au: {
    game_slug: 'dogmasons_megawoof',
    provider: 'Popiplay',
    provider_slug: 'popiplay',
  },
  global: {
    game_slug: 'dogmasons_megawoof',
    provider: 'Popiplay',
    provider_slug: 'popiplay',
  }
},
src: 'dogmasons_megawoof',
supportedCurrencies: {
    au: 'all',
    global: 'all'
 }
},
  
];

/**
 * Хелпер для создания новой игры в объединенном формате
 * @param params Объект с параметрами игры
 * @returns Объект игры с правильной структурой
 */
export function createGame(params: {
  name: string;
  src: string;
  auInfo?: {
    provider: string;
    provider_slug: string;
    game_slug?: string;
    supportedCurrencies: string[] | 'all';
  };
  globalInfo?: {
    provider: string;
    provider_slug: string;
    game_slug?: string;
    supportedCurrencies: string[] | 'all';
  };
  no_demo?: boolean;
}): Game {
  const game: Game = {
    name: params.name,
    regions: {},
    src: params.src,
    supportedCurrencies: {},
    no_demo: params.no_demo ?? false
  };
  
  if (params.auInfo) {
    game.regions.au = {
      game_slug: params.auInfo.game_slug || 
        (params.auInfo.provider_slug === 'booongo' ? params.src : `${params.auInfo.provider_slug}_${params.src}`),
      provider: params.auInfo.provider,
      provider_slug: params.auInfo.provider_slug
    };
    game.supportedCurrencies.au = params.auInfo.supportedCurrencies;
  }
  
  if (params.globalInfo) {
    game.regions.global = {
      game_slug: params.globalInfo.game_slug || 
        `${params.globalInfo.provider_slug}_${params.src}`,
      provider: params.globalInfo.provider,
      provider_slug: params.globalInfo.provider_slug
    };
    game.supportedCurrencies.global = params.globalInfo.supportedCurrencies;
  }
  
  return game;
}

/**
 * Проверяет, отключен ли режим демо для игры
 * @param game Объект игры
 * @returns true если режим демо отключен, false по умолчанию
 */
export function isDemoDisabled(game: Game): boolean {
  return game.no_demo ?? false;
}

