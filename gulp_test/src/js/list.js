class list{
    constructor(){
        this.addEvent();
    }
    addEvent(){
        //列表
        $('.hhhi').on('mouseenter',function(){
            $('.hide').css('display','block')
            $('.hhhi').css({
                background : function(){
                    return '#fff';
                },
                border : function(){
                    return '1px solid #cccccc';
                },
                borderBottom : function(){
                    return 0;
                },
                color : function(){
                    return '#e93b39';
                }
            })
            $('.hhhi span').css({
                transform : function(){
                    return 'rotateZ(-180deg)';
                }
            })
        })
        $('.hhhi').on('mouseleave',function(){
            $('.hide').css('display','none')
            $('.hhhi').css({
                background : function(){
                    return '#ededed';
                },
                border : function(){
                    return '1px solid transparent';
                },
                color : function(){
                    return '#666';
                }
            })
            $('.hhhi span').css({
                transform : function(){
                    return 'rotateZ(0)';
                }
            })
        })
        $('.hide').on('mouseenter',function(){
            $('.hide').css('display','block')
            $('.hhhi').css({
                background : function(){
                    return '#fff';
                },
                border : function(){
                    return '1px solid #cccccc';
                },
                borderBottom : function(){
                    return 0;
                },
                color : function(){
                    return '#666';
                }
            })
            $('.hhhi span').css({
                transform : function(){
                    return 'rotateZ(-180deg)';
                }
            })
        })
        $('.hide').on('mouseleave',function(){
            $('.hide').css('display','none')
            $('.hhhi').css({
                background : function(){
                    return '#ededed';
                },
                border : function(){
                    return '1px solid transparent';
                },
                color : function(){
                    return '#666';
                }
            })
            $('.hhhi span').css({
                transform : function(){
                    return 'rotateZ(0)';
                }
            })
        })

        //更多
        $('.more .see').click(function(){
            if($('.more .see span').text() == '更多选项'){
                $('.end').css('display','block');
                $('.more .see span').text('收起');
                $('.more .see').css('textIndent','25px');
            }else{
                $('.end').css('display','none');
                $('.more .see span').text('更多选项');
                $('.more .see').css('textIndent','12px');
            }
        })
        
        //登录/注册/首页
        $('.login a').click(function(){
            location.href = 'login.min.html';
        })
        $('.registor a').click(function(){
            location.href = 'register.min.html';
        })
        $('.first').click(function(){
            location.href = '../index.html';
        })
        $('#man').click(function(){
            location.href = 'list.min.html'
        })

    }
}
new list();
//小火箭
(function(){
    $(window).scroll(function(){
        let scroll_top = Math.floor(document.documentElement.scrollTop || document.body.scrollTop);
        if(scroll_top >= 300){
            $('.fixs').css('display','block')
        }else{
            $('.fixs').css('display','none')
        }
    })
    $('.fixs').click(function(){
        $('html,body').animate({scrollTop : 0},400)
    })
})()