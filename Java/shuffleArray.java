import java.util.Arrays;
public class shuffleArray{
    public static void main(String[] args){
       int [] array ={1,2,3,4,5,6,7};
       ShuffleArray(array);
       System.out.println(Arrays.toString (array));
    }

    public static void ShuffleArray(int[] array){
        int index,temp;
        for(int i=array.length-1;i>0;i--){
            index= (int) Math.floor((i+1)*Math.random());
            temp = array[index];
            array[index]= array[i];
            array[i]=temp;
        }
    }
}