function saveOptions() {
  const translateFrom = document.getElementById('translate-from').value;
  const translateTo = document.getElementById('translate-to').value;

  chrome.storage.sync.set(
    {
      translateFrom: translateFrom,
      translateTo: translateTo,
    },
    function() {
      let status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    },
  );
}
document.getElementById('save-options').addEventListener('click', saveOptions);

chrome.storage.sync.get(['translateFrom', 'translateTo'], function(result) {
  let { translateFrom, translateTo } = result;

  if (!translateFrom) {
    translateFrom = 'deutsch';
  }

  if (!translateTo) {
    translateTo = 'daenisch';
  }

  document.getElementById('translate-from').value = translateFrom;
  document.getElementById('translate-to').value = translateTo;
});
