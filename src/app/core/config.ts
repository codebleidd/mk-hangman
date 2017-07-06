const hasDictionaryDef = `hasDictionaryDef=true`,
  corpusLength = `minCorpusCount=0&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1`,
  wordLength = `minLength=5&maxLength=11`,
  apiKey = `api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5`;

export let CONFIG = {
  apiUrl: `http://api.wordnik.com:80/v4/words.json/randomWord?${hasDictionaryDef}&${corpusLength}&${wordLength}&${apiKey}`
};
