// Get all the toggle headings
var toggleHeadings = document.querySelectorAll('.toggle-heading');
// Add event listener for each heading
toggleHeadings.forEach(function (heading) {
    heading.addEventListener('click', function () {
        // Get the target section ID from data attribute
        var targetId = heading.getAttribute('data-target');
        var section = document.getElementById(targetId);
        // Toggle the "expanded" class to collapse/uncollapse
        if (section.classList.contains('expanded')) {
            section.classList.remove('expanded');
        }
        else {
            section.classList.add('expanded');
        }
    });
});
