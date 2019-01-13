function lookupWord(info) {
  const word = info.selectionText;
  chrome.storage.sync.get(['translateFrom', 'translateTo'], function(result) {
    let { translateFrom, translateTo } = result;

    if (!translateFrom) {
      translateFrom = 'deutsch';
    }

    if (!translateTo) {
      translateTo = 'daenisch';
    }

    chrome.tabs.create({
      url: `https://de.langenscheidt.com/${translateFrom}-${translateTo}/search?term=${word}`,
    });
  });
}

chrome.contextMenus.create({
  title: 'Search Langenscheidt',
  contexts: ['selection'],
  onclick: lookupWord,
});
