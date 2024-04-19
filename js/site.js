/*function Clearform(){
    alert('You are resetting form');
}*/
function Clearform(){
    //document.getElementById('fullname').value = '';
    document.getElementById('contactform').reset();
}

/*const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl))*/

$(function(){
    var pages=['index','about','travel','contact'];
    var pathname = window.location.pathname;
        
    $('.nav-link').each(function(item){ 
        if(pathname.includes(pages[item]))
        {
            $(this).addClass('active');
            $(this).attr('aria-surrent', 'page');
        }
    } 
    )
}
)