from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializers import SuscripcionSerializer
from .models import Suscripcion
from django.conf import settings
import json
import mercadopago
# Create your views here.

class SuscripcionViewSet(viewsets.ModelViewSet):
    queryset = Suscripcion.objects.all()
    serializer_class = SuscripcionSerializer

sdk = mercadopago.SDK("ACCESS_TOKEN")


def post(self, request):
        try:
            request_values = json.loads(request.body)
            payment_data = {
                "transaction_amount": float(request_values["transaction_amount"]),
                "token": request_values["token"],
                "installments": int(request_values["installments"]),
                "payment_method_id": request_values["payment_method_id"],
                "issuer_id": request_values["issuer_id"],
                "payer": {
                    "email": request_values["payer"]["email"],
                    "identification": {
                        "type": request_values["payer"]["identification"]["type"],
                        "number": request_values["payer"]["identification"]["number"],
                    },
                },
            }

            sdk = mercadopago.SDK(str(settings.YOUR_ACCESS_TOKEN))

            payment_response = sdk.payment().create(payment_data)

            payment = payment_response["response"]
            status = {
                "id": payment["id"],
                "status": payment["status"],
                "status_detail": payment["status_detail"],
            }
            return Response(data={"body": status, "statusCode": payment_response["status"]}, status=201)
        

        except Exception as e:
              return Response(data={"body": payment_response},status=400)
        