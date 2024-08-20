$(document).ready(function() {
    // init isotope
    var $listing = $('.box-listing').isotope({
        itemSelector: '.box-item',
        layoutMode: 'fitRows',
        getSortData: {
            number: '.item-id parseInt',
            name: '.item-name',
            category: '[data-category]'
        }
    });

        // bind filter button click
        $("#filters").on("click", "button", function() {
            var filterValue = $(this).attr('data-filter');
            $listing.isotope({ filter: filterValue });
        });

    // bind sort button click
    $("#sorts").on("click", "button", function() {
        var sortValue = $(this).attr('data-sort-by');
        console.log(sortValue);
        $listing.isotope({ sortBy: sortValue });
    });
});


// document.querySelectorAll('.timeline-item').forEach(item => {
//     item.addEventListener('click', () => {
//         // 展开或收起详细信息
//         const content = item.querySelector('.description');
//         content.classList.toggle('expanded');
//     });
// });