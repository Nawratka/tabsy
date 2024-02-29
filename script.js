const tabContainer = document.querySelector('.tabs');

tabContainer.addEventListener('click', (e) => {
	if (!e.target.classList.contains('tab')) return;

	// TAB HANDLE
	document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
	const tab = e.target.dataset.tab;
	const currTab = document.querySelector(`p[data-tab=${tab}]`);
	currTab.classList.add('active');

	// CONTENT HANDLE
	const contents = document.querySelectorAll('.content');
	contents.forEach((div) => div.classList.add('hidden'));
	const currContent = document.querySelector(`div[data-tab=${tab}]`);
	currContent.classList.remove('hidden');
});
