from django.conf.urls import patterns, include, url
urlpatterns = patterns('',
    url(r'^upload/$','products.views.uploadProduct', name='upload'),
    url(r'^list/$','products.views.product_list', name ='list'),
    url(r'^product/bid/(?P<id>[0-9]+)/$','products.views.postBid',name = 'bid'),
    url(r'^product/(?P<id>[0-9]+)/$','products.views.viewProduct', name = 'viewProduct'),
url(r'^product/productBidded/(?P<id>[0-9]+)/$','products.views.productBidded', name = 'productBidded'),
url(r'^product/bidlist/(?P<id>[0-9]+)/$','products.views.bid_show', name = 'bid_show'),
url(r'^product/follow/(?P<id>[0-9]+)/$','products.views.follow',name = 'follow'),
url(r'^product/unfollow/(?P<id>[0-9]+)/$','products.views.unfollow',name = 'unfollow'),
url(r'^product/following/$', 'products.views.showfollowing', name = 'showfollowing')
)

