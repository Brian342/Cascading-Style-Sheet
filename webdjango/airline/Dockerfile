# Descibe the instructions for creating a docker image(rep all libraies on the container)
FROM python:3
COPY . /Users/briankimanzi/Documents/PythonProgramming/Web/webdjango/airline
WORKDIR /Users/briankimanzi/Documents/PythonProgramming/Web/webdjango/airline
RUN pip install -r requirements.txt
CMD ["python3", "manage.py", "runserver", "0.0.0.0:8000"]
