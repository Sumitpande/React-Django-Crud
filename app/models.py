from django.db import models

# Create your models here.
class Marks(models.Model):
    physics = models.CharField(max_length=200)
    chemistry = models.CharField(max_length=200)
    maths = models.CharField(max_length=200)

    def __str__(self):
        return (f'Phy:{self.physics} Chem:{self.chemistry} Maths:{self.maths}')

    

class Student(models.Model):
    name = models.CharField(max_length=200)
    regno = models.CharField(max_length=200,blank=True)
    address = models.CharField(max_length=200,blank=True)
    mobile = models.CharField(max_length=200,blank=True)
    marks = models.ForeignKey("Marks", on_delete=models.CASCADE,null=True,related_name='mark')
    

    
    def __str__(self):
        return (self.name)

    