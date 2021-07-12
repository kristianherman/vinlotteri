from django import forms
from. models import Lodd

class LoddForm(forms.ModelForm):
    class Meta:
        model = Lodd
        fields = [
            'navn',
            'antall'
        ]