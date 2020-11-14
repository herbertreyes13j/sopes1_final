FROM python
WORKDIR /app
ADD . .
RUN pip3 install --upgrade pip
RUN pip3 install Flask
RUN pip3 install flask_cors
RUN pip3 install requests
RUN pip3 install mysqlclient
RUN pip3 install mysql-connector-python
EXPOSE 4200
ENTRYPOINT ["python","index.py"]