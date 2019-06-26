describe('fixedHeader - options - fixedHeader', function() {
	let table;

	dt.libs({
		js: ['jquery', 'datatables', 'fixedheader'],
		css: ['datatables', 'fixedheader']
	});

	describe('Check the defaults', function() {
		dt.html('basic');
		it('Just the header by default...', function() {
			expect($.fn.dataTable.FixedHeader.defaults.header).toBe(true);
			expect($.fn.dataTable.FixedHeader.defaults.footer).toBe(false);
		});
		it('No fixed header shown on initialisaton', function() {
			table = $('#example').DataTable({ fixedHeader: true, paging: false });
			expect($('table.dataTable').length).toBe(1);
			expect($('table.fixedHeader-floating').length).toBe(0);
		});
		it('... appears when scolling down', async function() {
			$('html').scrollTop(2000);
			await dt.sleep(500);
			expect($('table.dataTable').length).toBe(2);
			expect($('table.fixedHeader-floating').length).toBe(1);
		});
		it('Tidyup', function() {
			// needed because of DD-934
			table.destroy();
		});
	});
});
