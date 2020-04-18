import React, { Component } from "react";
import {ScrollView,StyleSheet} from 'react-native';
import {Text} from 'native-base';

export default class QuiNous extends Component {
    render() {
        return (
    
            <ScrollView style={{  backgroundColor:  "white"}} keyboardShouldPersistTaps="handled">
      
    <Text style={styles.textlabel1}>
هذه التطبيقة تم إنشاؤها من قبل مجموعة من الأطباء و المهندسين(ات) التونسيين(ات) في إطار دعم الجهود الوطنية لمقاومة فيروس كورونا.
و تهدف إلى تخفيف العبء المسجل على خطوط 190 التابعة للإنعاش الطبي الاستعجالي و تحديد الحالات المصابة الأكثر خطورة و التي هي بحاجة ماسة لتدخل طبي عاجل و تنسيق ذلك إضافة إلى إرشاد المريض(ة) إلى أنجع الحلول من اجل متابعة حالته(ا) المرضية في حالة وجود أعراض غير خطيرة ..
كل المعطيات المسجلة على هذه التطبيقة يتعامل معها فرق الإنعاش الطبي الاستعجالي بالمستشفيات العمومية التابعة لوزارة الصحة التونسية و يتم الاتصال بالمرضى المسجلين في الإبان مع مراعاة درجة خطورة الحالات.
يمكن للمسجل على هذا الموقع إضافة أكثر من مريض(ة) و متابعة حالتهم(ن).

تحتوي هذه التطبيقة على جملة من الأسئلة حول أعراض المريض(ة) والأمراض المزمنة التي يعاني/تعاني منها و يرجو الإجابة عنها بدقة.
كل المعطيات المسجلة على هذه التطبيقة يتم التعاطي معها من قبل فرق الانعاش الطبي الاستعجالي بتونس.من اجل تنسيق اكبر للجهود في اطار مقاومة فيروس كورونا ، اضافة الى كونها مهمة في تطوير البحث العلمي و متابعة الوضع الوبائي جهويا و وطنيا و فهم ادق لمناطق انتشار الوباء.
هذه المعطيات الشخصية محمية برمجيا و بموجب السر المهني للاطباء و العاملين في المجال الصحي
الجهة الوحيدة المخولة للتعامل مع هذه المعطيات هي وزارة الصحة و كليات الطب و الهياكل التابعة لها في اطار جهود مقاومة وباء كورونا و البحوث العلمية المزمع القيام بها في هذا الاطار 
</Text> 
             </ScrollView >
            );
    }
}
const styles = StyleSheet.create({
textlabel1: {
    fontSize: 18,
    paddingRight:30,
    left:10,
  }
});