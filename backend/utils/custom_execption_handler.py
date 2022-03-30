from rest_framework.views import exception_handler

def custom_exception_handler(exc, context):

    response = exception_handler(exc, context)

    exception_class = exc.__clas__.__name__

    print(exception_class)

    return response 