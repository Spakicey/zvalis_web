from django.http.response import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http.response import JsonResponse
from .models import Project
from .serializers import ProjectSerializer

class ProjectView(APIView):
    def post(self, request):
        data = request.data
        serializer = ProjectSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Project Added Successfully",
                                safe=False)
        return JsonResponse("Failed tp Add Project", safe=False)

    def get_project(self, pk):
        try:
            project = Project.objects.get(id=pk)
            return project
        except Project.DoesNotExist:
            raise Http404

    def get(self, request, pk=None):
        if pk:
            data = self.get_project(pk)
            serializer = ProjectSerializer(data)
        else:
            data = Project.objects.all()
            serializer = ProjectSerializer(data, many=True)
        return Response(serializer.data)

    def put(self, request, pk=None):
        project_to_update = Project.objects.get(id=pk)
        serializer = ProjectSerializer(instance=project_to_update,
                                       data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Project updated Successfully",
                                safe=False)
        return JsonResponse("Failed to Update Project")

    def delete(self, request, pk):
        project_to_delete = Project.objects.get(id=pk)
        project_to_delete.delete()
        return JsonResponse("Project Deleted Successfully", safe=False)
