#include <iostream>
using namespace std;
int swap(int x, int y)
{
    int temp;
    temp = x;
    x = y;
    y = temp;
}
int main()
{
    int a = 1, b = 3;
    swap(a, b);
    cout << a << endl
         << b;
    return 0;
}