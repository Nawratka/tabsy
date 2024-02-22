const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', (e) => {
	if (!e.target.classList.contains('tab')) return;

	const contents = document.querySelectorAll('.content');
	const tab = e.target.dataset.tab;
	contents.forEach((div) => div.classList.add('hidden'));
	const currContent = document.querySelector(`div[data-tab=${tab}]`);
	currContent.classList.remove('hidden');
});
