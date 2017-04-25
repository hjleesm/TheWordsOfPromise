import { Injectable, EventEmitter, Output } from '@angular/core';

export class Word {
  word: string;
  address: string;
  tags: string[];
}

const WORDS: Word[] = [
  { 
    word: `11 또 증거는 이것이니 하나님이 우리에게 영생을 주신 것과 이 생명이 그의 아들 안에 있는 그것이니라 
            12 아들이 있는 자에게는 생명이 있고 하나님의 아들이 없는 자에게는 생명이 없느니라`,
    address: '(요한일서 5:11-12)',
    tags: ['구원', '생명']
  },
  { 
    word: `24 지금까지는 너희가 내 이름으로 아무 것도 구하지 아니하였으나 구하라 그리하면 받으리니 너희 기쁨이 충만하리라`,
    address: '(요한복음 16:24)',
    tags: ['기도']
  },
  { 
    word: `13 사람이 감당할 시험 밖에는 너희가 당한 것이 없나니 오직 하나님은 미쁘사 너희가 감당하지 못할 시험 당함을 허락하지 아니하시고 시험 당할 즈음에 또한 피할 길을 내사 너희로 능히 감당하게 하시느니라`,
    address: '(고린도전서 10:13)',
    tags: ['승리', '시험']
  },
  { 
    word: `9 만일 우리가 우리 죄를 자백하면 그는 미쁘시고 의로우사 우리 죄를 사하시며 우리를 모든 불의에서 깨끗하게 하실 것이요`,
    address: '(요한일서 1:9)',
    tags: ['죄', '죄사함']
  },
  { 
    word: `5 너는 마음을 다하여 여호와를 신뢰하고 네 명철을 의지하지 말라
            6 너는 범사에 그를 인정하라 그리하면 네 길을 지도하시리라`,
    address: '(잠언 3:5-6)',
    tags: ['인도']
  }
];

@Injectable()
export class WordService {
  selectedWords = [WORDS[0]];
  isChanged = false;

  constructor() { }

  requesetWord(tag: string) {
    let newWords = [];

    // add
    for(let i in WORDS) {
      if(WORDS[i].tags.indexOf(tag) >= 0) {
        newWords.push(WORDS[i]);
      }
    }

    return newWords;
  }
}
