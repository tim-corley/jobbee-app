from django_filters import rest_framework as filters
from .models import Job

class JobsFilter(filters.FilterSet):

    keyword = filters.CharFilter(field_name='title', lookup_expr='icontains')
    location = filters.CharFilter(field_name='address', lookup_expr='icontains')
    min_salary = filters.NumberFilter(field_name='salary' or 0, lookup_expr='gte')
    max_salary = filters.NumberFilter(field_name='salary' or 1000000, lookup_expr='lte')

    class Meta:
        """
        These fields allow for query params to be applied to the endpoint when making get request for jobs in order to filter results
        Ex.: http:<DOMAIN>/api/jobs/?education=Bachelors
        http://<DOMAIN>/api/jobs/?min_salary=85000&jobType=Temporary
        """
        model = Job
        fields = ('keyword', 'location', 'education', 'jobType', 'experience', 'min_salary', 'max_salary')