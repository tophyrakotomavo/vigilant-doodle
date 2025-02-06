// alert('hello Word')



var searchIcon = document.getElementById('searchIcon'),
    exit = document.getElementById('exit'),
    searchDevelop = document.getElementById('searchDevelop');

var category = document.getElementById('category'),
    searchBar = document.getElementById('search');

// alert(category.textContent);

var  navigationSearch = {
    search : function(){
        searchIcon.style.display = 'none';
        searchDevelop.style.display = 'flex';
    },
    exitFunc : function(){
        searchDevelop.style.display = 'none';
        searchIcon.style.display = 'block';
    },
    overflow : function() {
        searchDevelop.style.overflow = 'visible';
    }
};
    









var newBranch = document.getElementById('newBranch');
var page1 = document.getElementById('dinganaI'),
    pageII = document.getElementById('PageII'),
    pageIII = document.getElementById('PageIII'),
    pageIV = document.getElementById('PageIV'),
    pageV = document.getElementById('PageV');


var requiredD1 = page1.getElementsByTagName('input');


var addBranch = {
    newBranchFunc : function(){
        page1.style.display = 'flex';
    }
}





var overlay = {
    isExitI : function(){
        page1.style.display = 'none';
    },

    submitI : function(e){
        page1.style.display = 'none';
        pageII.style.display = 'flex';
        // SubmitEvent;
        e.preventDefault();
    },



    isExitII : function(){
        pageII.style.display = 'none';
        page1.style.display = 'flex';
    },

    submitII : function(e){
        pageII.style.display = 'none';
        pageIII.style.display = 'flex';
        SubmitEvent;
        e.preventDefault();
    },


    isExitIII : function(){
        pageIII.style.display = 'none';
        pageII.style.display = 'flex';
    },

    submitIII : function(e){
        pageIII.style.display = 'none';
        pageIV.style.display = 'flex';
        SubmitEvent;
        e.preventDefault();
    },


    isExitIV : function(){
        pageIV.style.display = 'none';
    },

    submitIV : function(e){
        pageIV.style.display = 'none';
        SubmitEvent;
        e.preventDefault();
    }
}


document.addEventListener('loadstart' , function(){
    pageV.style.display = 'flex';
}, true);




var voatokana = document.getElementById('notokanana'),
    MyPII = document.getElementById('MyPII');

voatokana.onchange = function() {
    if (voatokana.checked) {
        MyPII.style.display = 'block';
    } else {
        MyPII.style.display = 'none';
    }
};





var childdren = document.getElementById('childdren'),
    childDevelop = document.getElementById('childDevelop'),
    libreDevelop = document.getElementById('libreDevelop'),
    lienDevelop = document.getElementById('lienDevelop');
    
    
var developper = {
    develop : function(){
        childDevelop.style.display = 'block';
    },
    fotoana : function(){
        libreDevelop.style.display = 'block';
    }
}



document.getElementById('fin').addEventListener('click', function(e){
    childDevelop.style.display = 'none';
    libreDevelop.style.display = 'none';
},false);