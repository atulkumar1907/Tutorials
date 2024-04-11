#include<iostream>
using namespace std;

// function overloading: same function arguments

typedef class ApnaCollege{
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
    void fun(int, float){
        cout<<"I am a function with two argument"<<endl;
    }
} ac;

int main(){
    ac a1;
    a1.fun();

    a1.fun(2);

    a1.fun(32.0);

    a1.fun(2, 3);

    return 0;
}