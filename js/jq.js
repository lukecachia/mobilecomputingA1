
var panel = '<div id="nav-panel" data-role="panel" data-display="push" data-theme="b" class="ui-panel ui-panel-position-left ui-panel-display-push ui-body-b ui-panel-animate ui-panel-open">' +
                '<div class="ui-panel-inner">' +
                    '<ul data-role="listview" class="ui-listview">' +
                        '<li class="ui-btn ui-icon-home ui-btn-icon-right ui-shadow ui-corner-all"><a href="#indexPage">Home</a></li>' +
                        '<li><a href="#goalsPage">Goals</a></li>' + 
                        '<li><a href="#personasPage">Personas</a></li>' +
                        '<li>Mock Ups</li>' + 
                        '<li><a href="#comparisionsPage">Critique</a></li>' +
                        '<li>Challanges</li>' +
                        
                    '</ul>' +
                '</div>' +
            '</div>'; 


$(document).one('pagebeforecreate', function() {
    $.mobile.pageContainer.prepend(panel);
    $("#nav-panel").panel().enhanceWithin();

})