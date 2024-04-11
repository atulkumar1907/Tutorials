#include<iostream>
using namespace std;

class Complex{
private:
    int real, img;
    public:

        Complex(int r=0, int i=0){
            real = r;
            img = i;
        }

        Complex(Complex const &a){
            real = a.real;
            img = a.img;
        }

    Complex operator + (Complex const &obj){
        Complex res;
        res.img = img + obj.img;
        res.real = real + obj.real;
        return res;
    }

    Complex operator - (Complex const &obj){
       Complex res;
        res.img = img - obj.img;
        res.real = real - obj.real;
        return res;
    }

    Complex operator * (Complex const &obj){
        Complex res;
        res.img = (img * obj.real) + (real * obj.img);
        res.real = (real * obj.real) - (img * obj.img);
        return res;
    }

    


    void display(){
       if(img<0){
         cout<< real<<" - "<<-1*img<<"i"<<endl;
       }
       else if(img==0){
         cout<< real<<" + "<<img<<"i"<<endl;
       }
       else{
         cout<< real<<" + "<<img<<"i"<<endl;
       }
    }
};



int main(){

    Complex c1(3, 4);
    Complex c2(1, 6);
    Complex c3(c1);
    Complex c4 = c1+c2;
    Complex c5 = c1-c2;
    Complex c6 = c1*c2;

    cout<<"Object c1 : ";
    c1.display();

    cout<<"Object c2 : ";
    c2.display();

    cout<<"Copy constructor : ";
    c3.display();

    cout<<"Addition : ";
    c4.display();

    cout<<"Subtraction : ";
    c5.display();

    cout<<"Multiplication : ";
    c6.display();


    return 0;
}

