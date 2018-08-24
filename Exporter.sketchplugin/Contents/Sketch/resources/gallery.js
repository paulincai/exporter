function createGallery() {
    return {        
        loaded: false,
        visible: false,
        initialize: function()   {
        },
        switch: function(){
            if(!this.visible){
                this.show();
            }else{
                this.hide();
            }
            $('#nav-right-gallery').toggleClass('active', this.visible);
        },
        show: function() {
            $('#gallery').removeClass('hidden');
            if(!this.loaded){
                this.loadPages();
                this.loaded = true;
            }
            this.visible = true;
        },
        loadPages: function(){
            var pageIndex=0;
            story.pages.forEach(function(page){
                this.loadOnePage(page,pageIndex++);
            },this);
        },
        selectPage: function(index){
            gallery.hide();            
            viewer.goToPage(index);
        },
        loadOnePage: function(page,pageIndex){
            var hasRetinaImages = $.inArray(2, story.resolutions) != -1; 
            var imageURI = hasRetinaImages && viewer.isHighDensityDisplay() ? page.image2x : page.image;	
            
            var width = 200;
            var height = page.height / (page.width / width);

            var div = $('<div/>', {
                id : pageIndex,
                class: "gallery-div",                             
            });
            div.click(function(e){                
                gallery.selectPage(parseInt(this.id));
            });
            div.appendTo($('#gallery'));

            var img = $('<img/>', {
                id : "img_gallery_"+pageIndex,
                class: "gallery-image",
                alt: page.title,
				src : encodeURIComponent(viewer.files) + '/' + encodeURIComponent(imageURI),
            }).attr('width', width).attr('height', height);
            img.appendTo(div);	
        },
        hide: function(){
            $('#gallery').addClass('hidden');
            this.visible = false
        }
    }
}
