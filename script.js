const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');
const checkbox = document.querySelector('#checkbox');
const modeText = document.querySelector('#mode-text');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

checkbox.addEventListener('change', function() {
  if (checkbox.checked) {
    modeText.innerHTML = "Modo Escuro";
  } else {
    modeText.innerHTML = "Modo Claro";
  }
});
