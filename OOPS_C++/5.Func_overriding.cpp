#include<iostream>
using namespace std;

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
    base *ptr;
    derived d;
    ptr = &d;
    ptr->print();
    ptr->display();
}