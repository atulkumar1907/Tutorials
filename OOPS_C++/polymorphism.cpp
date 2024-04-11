#include<iostream>
using namespace std;

// function overloading

class ApnaCollege{
    public:
    void fun(){
        cout<<"I am a function with no argument"<<endl;
    }
    void fun(int n){
        cout<<"I am a function with int argument"<<endl;
    }
    void fun(double n){
        cout<<"I am a function with double argument"<<endl;
    }
};


// operator overloading
class Complex{
private:
    int real, img;
    public:

        Complex(int r=0, int i=0){
            real = r;
            img = i;
        }

    Complex operator + (Complex const &obj){
        Complex res;
        res.img = img + obj.img;
        res.real = real + obj.real;
        return res;
    }
    void display(){
        cout<< real<<" + i"<<img<<endl;
    }
};


// function overriding
class base{
    public:
        virtual void print(){
            cout<<"this is the base class's print function"<<endl;
        }
        void display(){
            cout<< "this is bases class's display function"<< endl;
        }
};

class derived: public base{
    public:
        void print(){
            cout<<"this is the derived class's print function"<<endl;
        }
        void display(){
            cout<< "this is derived class's display function"<< endl;
        }

};


int main(){

    // ApnaCollege obj;
    // obj.fun();
    // obj.fun(4);
    // obj.fun(6.2);

    // Complex c1(12, 7), c2(6, 7);
    // Complex c3 = c1 + c2;
    // c3.display();

    base *ptr;
    derived d;
    ptr = &d;

    ptr->print();
    ptr->display();

    return 0;
}