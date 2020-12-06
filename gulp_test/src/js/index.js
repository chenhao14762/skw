class header{
    constructor(){
        this.left_section = $('.left_section');
        this.switch = $('.switch');
        this.search = $('.search');
        this.product = $('.produc');
        this.icon_ss = $('.icon-ss');
        this.body = $('document')
        this.addEvent();
    }
    addEvent(){
        this.left_section.click(function(){
            this.switch.css('display','block');
        }.bind(this));
        this.left_section.mouseleave(function(){
            this.switch.css('display','none')
        }.bind(this));
        this.search.bind('mousedown',function(){
            this.product.css('textAlign','left');
            this.product.val('');
            this.product.css('cursor','text');
            this.search.animate({width : 190},'220','linear');
            this.search.css('borderBottom','1px solid #fff');
            this.icon_ss.css('color','#fff')
        }.bind(this))
    }
}
new header();