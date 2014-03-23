from django.conf.urls import patterns, url
from apps.concepts.views import ConceptDetailView

__author__ = 'misternando'

urlpatterns = patterns('',
#    url(r'^$', ConceptCreateView.as_view(), name='concept-create'),
    url(r'^(?P<concept>[a-zA-Z0-9\-\.]+)/$', ConceptDetailView.as_view(), name='concept-detail'),
#    url(r'^(?P<concept>[a-zA-Z0-9\-\.]+)/versions/$', ConceptVersionsView.as_view(), name='concept-version-list'),
#    url(r'^(?P<concept>[a-zA-Z0-9\-\.]+)/(?P<concept_version>[a-zA-Z0-9\-\.]+)/$', ConceptVersionRetrieveView.as_view(), name='conceptversion-detail'),
)
