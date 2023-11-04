public class Pangram {
    public static void main(String[] args){
        String x = "I AM SURE ABOUT IT";
        x= x.replace(" ","");
        char y[]= x.toCharArray();
        int size = y.length;
        int a[]={0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};
        int i =0;
        while(i!=size)
        {
            int index=y[i]-65;
            a[index]=1;
            ++i;
        }
        i=0;
        while(i!=26){
            if(a[i]==1)
            {
                ++i;
            }
            else{
                System.out.println("Non-panagram");
                System.exit(0);
            }
        }
        System.out.println("pangram");
    }
}
