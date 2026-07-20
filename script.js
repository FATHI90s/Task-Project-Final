// =============================================
// CheatSheet Hub - Script File (نسخة محدثة)
// بيانات حقيقية مع وصف تفصيلي لكل اختصار
// =============================================

// ---------- البيانات الحقيقية مع وصف تفصيلي ----------
const cheatsheetsData = [
    // ============================================================
    // JAVASCRIPT
    // ============================================================
    { 
        id: 1, 
        language: 'JavaScript', 
        shortcut: 'console.log()', 
        description: 'طباعة قيمة في وحدة التحكم', 
        category: 'Debugging',
        importance: 'أداة التصحيح الأساسية في JavaScript، تسمح لك بمراقبة قيم المتغيرات وتتبع تدفق البرنامج.',
        fullDescription: 'تستخدم لعرض أي قيمة (نص، رقم، كائن، مصفوفة) في وحدة تحكم المتصفح. تعتبر الأداة الأكثر استخداماً لتصحيح الأخطاء وفهم ما يحدث داخل الكود.',
        example: 'console.log("Hello World");\nconsole.log(userData);\nconsole.log("القيمة هي:", 42);'
    },
    { 
        id: 2, 
        language: 'JavaScript', 
        shortcut: 'console.table()', 
        description: 'عرض البيانات على شكل جدول', 
        category: 'Debugging',
        importance: 'تعرض البيانات المعقدة (مصفوفات، كائنات) بشكل منظم وجدولي، مما يسهل قراءتها وتحليلها.',
        fullDescription: 'تعرض المصفوفات والكائنات في وحدة التحكم على شكل جدول مرتب، مما يجعل قراءة البيانات الكبيرة أسهل بكثير من console.log العادي.',
        example: 'console.table([\n  { name: "Ali", age: 25 },\n  { name: "Sara", age: 30 }\n]);'
    },
    { 
        id: 3, 
        language: 'JavaScript', 
        shortcut: 'console.time() / timeEnd()', 
        description: 'قياس وقت تنفيذ الكود', 
        category: 'Performance',
        importance: 'تسمح لك بقياس أداء الكود بدقة، ومعرفة أي الأجزاء تستغرق وقتاً طويلاً لتحسينها.',
        fullDescription: 'تبدأ المؤقت عند استدعاء console.time() وتوقفه عند console.timeEnd()، مما يعطيك الوقت المستغرق بالمللي ثانية لتنفيذ الكود بينهما.',
        example: 'console.time("loop");\nfor(let i = 0; i < 1000000; i++) { /* do something */ }\nconsole.timeEnd("loop");'
    },
    { 
        id: 4, 
        language: 'JavaScript', 
        shortcut: 'debugger;', 
        description: 'إيقاف التنفيذ وفتح أدوات المطور', 
        category: 'Debugging',
        importance: 'يوقف تنفيذ الكود عند هذه النقطة ويفتح أدوات المطور، مما يتيح لك فحص المتغيرات خطوة بخطوة.',
        fullDescription: 'عندما يواجه المتصفح هذا الأمر، يتوقف التنفيذ ويفتح لوحة المصادر (Sources) في أدوات المطور، حيث يمكنك تتبع تنفيذ الكود سطراً سطراً وفحص المتغيرات.',
        example: 'function calculateTotal(items) {\n  debugger; // سيتوقف هنا\n  return items.reduce((sum, item) => sum + item.price, 0);\n}'
    },
    { 
        id: 5, 
        language: 'JavaScript', 
        shortcut: 'typeof', 
        description: 'معرفة نوع المتغير', 
        category: 'Operators',
        importance: 'تساعدك في التحقق من نوع البيانات التي تتعامل معها، مما يمنع أخطاء غير متوقعة.',
        fullDescription: 'ترجع سلسلة نصية تمثل نوع القيمة المعطاة. الأنواع الممكنة: "undefined"، "number"، "string"، "boolean"، "object"، "function".',
        example: 'typeof 42;        // "number"\ntypeof "hello";    // "string"\ntypeof {};         // "object"\ntypeof [];         // "object" (تنبيه: المصفوفات تعتبر objects)'
    },
    { 
        id: 6, 
        language: 'JavaScript', 
        shortcut: 'instanceof', 
        description: 'التحقق من أن الكائن ينتمي لفئة معينة', 
        category: 'Operators',
        importance: 'تسمح لك بمعرفة ما إذا كان الكائن مشتقاً من فئة معينة، مفيد جداً في البرمجة الكائنية.',
        fullDescription: 'تتحقق مما إذا كان الكائن الأيسر ينتمي إلى الفئة (أو أي فئة مشتقة منها) الموجودة على اليمين. ترجع true أو false.',
        example: '[] instanceof Array;        // true\n{} instanceof Object;        // true\nnew Date() instanceof Date;  // true\n"hello" instanceof String;   // false (لأنها سلسلة بدائية)'
    },
    { 
        id: 7, 
        language: 'JavaScript', 
        shortcut: 'Array.map()', 
        description: 'تطبيق دالة على كل عنصر وإرجاع مصفوفة جديدة', 
        category: 'Array Methods',
        importance: 'الأداة الأكثر استخداماً لتحويل بيانات المصفوفات دون تعديل المصفوفة الأصلية، تعزز البرمجة الوظيفية.',
        fullDescription: 'تنشئ مصفوفة جديدة عن طريق تطبيق دالة على كل عنصر في المصفوفة الأصلية. لا تعدل المصفوفة الأصلية، مما يجعلها آمنة للاستخدام.',
        example: 'const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(n => n * 2);\n// doubled = [2, 4, 6, 8]'
    },
    { 
        id: 8, 
        language: 'JavaScript', 
        shortcut: 'Array.filter()', 
        description: 'تصفية المصفوفة حسب شرط معين', 
        category: 'Array Methods',
        importance: 'تسمح لك باستخراج عناصر محددة من المصفوفة بناءً على شرط، بدون تعديل المصفوفة الأصلية.',
        fullDescription: 'تنشئ مصفوفة جديدة تحتوي فقط على العناصر التي تجتاز الاختبار (ترجع true) في الدالة المقدمة. مفيدة جداً لتصفية البيانات.',
        example: 'const numbers = [1, 2, 3, 4, 5, 6];\nconst evens = numbers.filter(n => n % 2 === 0);\n// evens = [2, 4, 6]'
    },
    { 
        id: 9, 
        language: 'JavaScript', 
        shortcut: 'Array.reduce()', 
        description: 'اختزال المصفوفة إلى قيمة واحدة', 
        category: 'Array Methods',
        importance: 'تسمح بتحويل المصفوفة إلى أي شيء (رقم، كائن، مصفوفة أخرى) مما يجعلها قوية جداً للمعالجات المعقدة.',
        fullDescription: 'تطبق دالة على كل عنصر في المصفوفة (من اليسار إلى اليمين) لاختزالها إلى قيمة واحدة. تستخدم بشكل شائع لحساب المجاميع، الدمج، أو تحويل البيانات.',
        example: 'const numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((acc, curr) => acc + curr, 0);\n// sum = 10'
    },
    { 
        id: 10, 
        language: 'JavaScript', 
        shortcut: 'Array.forEach()', 
        description: 'تنفيذ دالة على كل عنصر (بدون إرجاع)', 
        category: 'Array Methods',
        importance: 'طريقة بسيطة لتنفيذ عمليات جانبية (side effects) على كل عنصر في المصفوفة، مثل الطباعة أو التحديث.',
        fullDescription: 'تنفذ دالة معينة مرة واحدة لكل عنصر في المصفوفة. لا تعيد أي شيء (undefined)، وتستخدم عندما تريد تنفيذ إجراء على كل عنصر دون الحاجة إلى قيمة مرتجعة.',
        example: 'const colors = ["أحمر", "أزرق", "أخضر"];\ncolors.forEach(color => console.log(color));'
    },
    { 
        id: 11, 
        language: 'JavaScript', 
        shortcut: 'Array.find()', 
        description: 'إيجاد أول عنصر يحقق الشرط', 
        category: 'Array Methods',
        importance: 'تسمح بالبحث عن عنصر محدد في المصفوفة بسرعة، وتوقف البحث فور العثور على أول تطابق.',
        fullDescription: 'ترجع أول عنصر في المصفوفة يحقق الشرط المحدد في دالة الاختبار. إذا لم تجد أي عنصر، ترجع undefined. مفيدة جداً للبحث في قوائم البيانات.',
        example: 'const users = [\n  { id: 1, name: "Ali" },\n  { id: 2, name: "Sara" }\n];\nconst user = users.find(u => u.id === 2);\n// user = { id: 2, name: "Sara" }'
    },
    { 
        id: 12, 
        language: 'JavaScript', 
        shortcut: 'Array.includes()', 
        description: 'التحقق من وجود عنصر في المصفوفة', 
        category: 'Array Methods',
        importance: 'طريقة بسيطة وسريعة للتحقق من وجود قيمة معينة في المصفوفة، بديل عن indexOf مع قراءة أفضل.',
        fullDescription: 'تتحقق مما إذا كانت المصفوفة تحتوي على قيمة معينة، وترجع true أو false. مفيدة جداً في الشروط والتحقق من الصلاحية.',
        example: 'const fruits = ["تفاح", "موز", "برتقال"];\nfruits.includes("موز");     // true\nfruits.includes("عنب");      // false'
    },
    { 
        id: 13, 
        language: 'JavaScript', 
        shortcut: 'Object.keys()', 
        description: 'إرجاع مفاتيح الكائن كمصفوفة', 
        category: 'Object Methods',
        importance: 'تسمح بالتعامل مع مفاتيح الكائن كمصفوفة، مما يتيح استخدام دوال المصفوفات عليها.',
        fullDescription: 'ترجع مصفوفة تحتوي على جميع المفاتيح (الخصائص) الخاصة بالكائن. تستخدم عادة للتكرار على خصائص الكائن أو لتحويلها.',
        example: 'const person = { name: "Ali", age: 25, city: "Riyadh" };\nconst keys = Object.keys(person);\n// keys = ["name", "age", "city"]'
    },
    { 
        id: 14, 
        language: 'JavaScript', 
        shortcut: 'Object.values()', 
        description: 'إرجاع قيم الكائن كمصفوفة', 
        category: 'Object Methods',
        importance: 'تسمح باستخراج قيم الكائن بسهولة للتعامل معها كمجموعة بيانات.',
        fullDescription: 'ترجع مصفوفة تحتوي على جميع القيم الخاصة بالكائن. مفيدة جداً عندما تريد التعامل مع قيم الكائن فقط دون المفاتيح.',
        example: 'const person = { name: "Ali", age: 25, city: "Riyadh" };\nconst values = Object.values(person);\n// values = ["Ali", 25, "Riyadh"]'
    },
    { 
        id: 15, 
        language: 'JavaScript', 
        shortcut: 'Object.entries()', 
        description: 'إرجاع أزواج [مفتاح، قيمة] كمصفوفة', 
        category: 'Object Methods',
        importance: 'تحويل الكائن إلى مصفوفة من الأزواج، مما يسهل التكرار على الكائن باستخدام for...of أو دوال المصفوفات.',
        fullDescription: 'ترجع مصفوفة من المصفوفات الصغيرة، كل منها يحتوي على [مفتاح، قيمة] للكائن. مفيدة جداً لتحويل الكائنات إلى صيغ قابلة للتكرار.',
        example: 'const person = { name: "Ali", age: 25 };\nconst entries = Object.entries(person);\n// entries = [["name", "Ali"], ["age", 25]]'
    },
    { 
        id: 16, 
        language: 'JavaScript', 
        shortcut: 'JSON.parse()', 
        description: 'تحويل نص JSON إلى كائن', 
        category: 'JSON',
        importance: 'الأداة الأساسية لاستقبال البيانات من APIs، حيث أن معظم واجهات برمجة التطبيقات ترسل البيانات بصيغة JSON.',
        fullDescription: 'تحول سلسلة نصية مكتوبة بصيغة JSON إلى كائن JavaScript يمكن التعامل معه. تستخدم بشكل أساسي عند استقبال بيانات من خادم أو API.',
        example: 'const jsonString = \'{"name":"Ali","age":25}\';\nconst obj = JSON.parse(jsonString);\n// obj = { name: "Ali", age: 25 }'
    },
    { 
        id: 17, 
        language: 'JavaScript', 
        shortcut: 'JSON.stringify()', 
        description: 'تحويل كائن إلى نص JSON', 
        category: 'JSON',
        importance: 'الأداة الأساسية لإرسال البيانات إلى الخادم، حيث تحول الكائنات إلى صيغة JSON القابلة للنقل.',
        fullDescription: 'تحول كائن JavaScript إلى سلسلة نصية بصيغة JSON. تستخدم بشكل أساسي عند إرسال بيانات إلى خادم أو تخزينها في localStorage.',
        example: 'const obj = { name: "Ali", age: 25 };\nconst jsonString = JSON.stringify(obj);\n// jsonString = \'{"name":"Ali","age":25}\''
    },
    { 
        id: 18, 
        language: 'JavaScript', 
        shortcut: 'fetch()', 
        description: 'إجراء طلب شبكة (API)', 
        category: 'Network',
        importance: 'الطريقة الحديثة والموصى بها لإجراء طلبات HTTP، بديلة عن XMLHttpRequest القديمة.',
        fullDescription: 'ترجع Promise يمثل نتيجة طلب شبكة. تستخدم لجلب البيانات من APIs، إرسال بيانات، أو تحميل ملفات. تعتمد على Promises مما يسهل التعامل معها باستخدام async/await.',
        example: 'fetch("https://api.example.com/users")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));'
    },
    { 
        id: 19, 
        language: 'JavaScript', 
        shortcut: 'async/await', 
        description: 'كتابة كود غير متزامن بطريقة سهلة', 
        category: 'Async',
        importance: 'تجعل الكود غير المتزامن يبدو وكأنه تزامني، مما يسهل القراءة والفهم ويقلل من تعقيد الـ callback hell.',
        fullDescription: 'تتيح كتابة الكود غير المتزامن بطريقة تبدو كالكود التزامني. async تعرف الدالة على أنها غير متزامنة، وawait توقف التنفيذ لحين اكتمال الـ Promise.',
        example: 'async function getUsers() {\n  const response = await fetch("https://api.example.com/users");\n  const data = await response.json();\n  return data;\n}'
    },
    { 
        id: 20, 
        language: 'JavaScript', 
        shortcut: 'Promise.all()', 
        description: 'تنفيذ عدة وعود (Promises) بالتوازي', 
        category: 'Async',
        importance: 'تسمح بتنفيذ عدة طلبات شبكة في وقت واحد، مما يسرع الأداء مقارنة بتنفيذها بالتسلسل.',
        fullDescription: 'تنتظر اكتمال جميع الـ Promises المقدمة، وترجع مصفوفة بنتائجها بنفس الترتيب. إذا فشل أي Promise، ترفض مع أول خطأ. مفيدة جداً لجلب بيانات متعددة في وقت واحد.',
        example: 'const [users, posts, comments] = await Promise.all([\n  fetch("/api/users"),\n  fetch("/api/posts"),\n  fetch("/api/comments")\n]);'
    },
    { 
        id: 21, 
        language: 'JavaScript', 
        shortcut: 'setTimeout()', 
        description: 'تنفيذ دالة بعد فترة زمنية', 
        category: 'Timers',
        importance: 'تسمح بتأخير تنفيذ الكود، مفيدة للتحكم في التوقيت، إنشاء مؤقتات، أو تأخير العمليات.',
        fullDescription: 'تحدد دالة لتُنفذ بعد عدد معين من المللي ثانية. ترجع معرف (ID) يمكن استخدامه لإلغاء المؤقت باستخدام clearTimeout().',
        example: 'setTimeout(() => {\n  console.log("تم التنفيذ بعد ثانية واحدة");\n}, 1000);'
    },
    { 
        id: 22, 
        language: 'JavaScript', 
        shortcut: 'setInterval()', 
        description: 'تنفيذ دالة بشكل متكرر كل فترة', 
        category: 'Timers',
        importance: 'تسمح بتنفيذ عمليات متكررة مثل تحديث الساعة، عمل عد تنازلي، أو طلب بيانات بشكل دوري.',
        fullDescription: 'تنفذ دالة معينة بشكل متكرر كل عدد محدد من المللي ثانية. ترجع معرف (ID) يمكن استخدامه لإيقاف التكرار باستخدام clearInterval().',
        example: 'let counter = 0;\nconst intervalId = setInterval(() => {\n  counter++;\n  console.log(`عد: ${counter}`);\n  if (counter === 5) clearInterval(intervalId);\n}, 1000);'
    },
    { 
        id: 23, 
        language: 'JavaScript', 
        shortcut: 'clearInterval()', 
        description: 'إيقاف التكرار', 
        category: 'Timers',
        importance: 'تسمح بإيقاف المؤقتات المتكررة لتوفير الموارد ومنع التسريبات.',
        fullDescription: 'توقف المؤقت الذي تم إنشاؤه بواسطة setInterval() باستخدام المعرف الذي تم إرجاعه. مهم جداً لمنع تنفيذ كود غير مرغوب فيه بعد انتهاء المهمة.',
        example: 'const intervalId = setInterval(() => {\n  console.log("يعمل...");\n}, 1000);\n\n// في وقت لاحق\nclearInterval(intervalId); // إيقاف التكرار'
    },
    { 
        id: 24, 
        language: 'JavaScript', 
        shortcut: 'document.querySelector()', 
        description: 'اختيار عنصر من DOM', 
        category: 'DOM',
        importance: 'الطريقة الأكثر مرونة لاختيار عناصر الصفحة، تدعم محددات CSS مما يجعلها سهلة الاستخدام.',
        fullDescription: 'ترجع أول عنصر في الصفحة يطابق محدد CSS المعطى. إذا لم يوجد، ترجع null. تستخدم للوصول إلى عناصر HTML وتعديلها أو التعامل معها.',
        example: 'const title = document.querySelector(".page-title");\nconst form = document.querySelector("#contact-form");\nconst firstLink = document.querySelector("nav a");'
    },
    { 
        id: 25, 
        language: 'JavaScript', 
        shortcut: 'document.querySelectorAll()', 
        description: 'اختيار جميع العناصر المطابقة', 
        category: 'DOM',
        importance: 'تسمح باختيار مجموعة من العناصر دفعة واحدة وتطبيق عمليات عليها باستخدام دوال المصفوفات.',
        fullDescription: 'ترجع NodeList تحتوي على جميع العناصر التي تطابق محدد CSS المعطى. يمكن تحويلها إلى مصفوفة باستخدام Array.from() للاستفادة من دوال المصفوفات.',
        example: 'const allLinks = document.querySelectorAll("nav a");\nconst allItems = document.querySelectorAll(".list-item");\n\n// التكرار عليها\nallLinks.forEach(link => console.log(link.href));'
    },
    { 
        id: 26, 
        language: 'JavaScript', 
        shortcut: 'element.classList.add()', 
        description: 'إضافة كلاس لعنصر', 
        category: 'DOM',
        importance: 'طريقة سهلة وآمنة لإضافة كلاسات CSS إلى العناصر، مما يتحكم في شكلها وتفاعلها.',
        fullDescription: 'تضيف كلاساً (أو أكثر) إلى العنصر المحدد. مفيدة جداً لإظهار/إخفاء عناصر، تغيير الألوان، أو إضافة تأثيرات عند تفاعل المستخدم.',
        example: 'const button = document.querySelector(".btn");\nbutton.classList.add("active", "highlighted");\n// الآن العنصر له كلاسين: active و highlighted'
    },
    { 
        id: 27, 
        language: 'JavaScript', 
        shortcut: 'element.classList.remove()', 
        description: 'إزالة كلاس من عنصر', 
        category: 'DOM',
        importance: 'تسمح بإزالة كلاسات CSS بسهولة، مما يغير مظهر العنصر أو سلوكه.',
        fullDescription: 'تزيل كلاساً (أو أكثر) من العنصر المحدد. تستخدم عكس .add() لإزالة التنسيقات أو التأثيرات.',
        example: 'const button = document.querySelector(".btn");\nbutton.classList.remove("active", "highlighted");\n// إزالة الكلاسات من العنصر'
    },
    { 
        id: 28, 
        language: 'JavaScript', 
        shortcut: 'element.addEventListener()', 
        description: 'إضافة مستمع للأحداث', 
        category: 'DOM',
        importance: 'الطريقة الحديثة والموصى بها للتعامل مع أحداث المستخدم، تسمح بإضافة عدة مستمعين لنفس الحدث.',
        fullDescription: 'تضيف مستمع (listener) للحدث المحدد على العنصر. عندما يحدث الحدث (مثل النقر، الضغط، التمرير)، تُنفذ الدالة المقدمة. تسمح بإضافة عدة دوال لنفس الحدث.',
        example: 'const button = document.querySelector("#submit-btn");\nbutton.addEventListener("click", function(event) {\n  console.log("تم النقر على الزر!");\n  event.preventDefault(); // منع السلوك الافتراضي إذا كان زر إرسال\n});'
    },
    { 
        id: 29, 
        language: 'JavaScript', 
        shortcut: 'element.innerHTML', 
        description: 'تغيير محتوى HTML للعنصر', 
        category: 'DOM',
        importance: 'تسمح بتغيير محتوى العنصر بالكامل، مما يتيح تحديث واجهة المستخدم ديناميكياً.',
        fullDescription: 'تستبدل كل المحتوى الداخلي للعنصر بمحتوى HTML جديد. يمكن استخدامها لإضافة عناصر جديدة، تغيير نصوص، أو بناء واجهات كاملة. لكن يجب الحذر من مشاكل الأمان (XSS) عند استخدامها مع بيانات من المستخدم.',
        example: 'const container = document.querySelector("#app");\ncontainer.innerHTML = `<h1>مرحباً</h1><p>هذا محتوى جديد</p>`;'
    },
    { 
        id: 30, 
        language: 'JavaScript', 
        shortcut: 'element.textContent', 
        description: 'تغيير النص الداخلي للعنصر', 
        category: 'DOM',
        importance: 'طريقة آمنة لتغيير النص فقط دون التأثير على هيكل HTML، تمنع تنفيذ أي كود HTML.',
        fullDescription: 'تغير النص الداخلي للعنصر، مع الحفاظ على جميع العناصر الفرعية. أكثر أماناً من innerHTML لأنها لا تنفذ كود HTML، فقط تعرض النص كما هو.',
        example: 'const title = document.querySelector(".title");\ntitle.textContent = "عنوان جديد للصفحة";\n// أي <script> أو HTML لن يتم تنفيذها'
    },
    { 
        id: 31, 
        language: 'JavaScript', 
        shortcut: 'localStorage.setItem()', 
        description: 'تخزين بيانات في المتصفح', 
        category: 'Storage',
        importance: 'تسمح بتخزين البيانات بشكل دائم في المتصفح، مما يحافظ على حالة المستخدم حتى بعد إغلاق المتصفح.',
        fullDescription: 'تخزن زوج (مفتاح، قيمة) في localStorage للموقع الحالي. البيانات تبقى حتى بعد إعادة تشغيل المتصفح أو الجهاز. تستخدم لتخزين تفضيلات المستخدم، حالة التطبيق، أو أي بيانات تحتاج إلى بقاء.',
        example: 'localStorage.setItem("username", "Ali_Dev");\nlocalStorage.setItem("theme", "dark");\nlocalStorage.setItem("userSettings", JSON.stringify({ fontSize: 16 }));'
    },
    { 
        id: 32, 
        language: 'JavaScript', 
        shortcut: 'localStorage.getItem()', 
        description: 'استرجاع بيانات من المتصفح', 
        category: 'Storage',
        importance: 'تسمح باسترجاع البيانات المخزنة مسبقاً، مما يحافظ على تجربة المستخدم واستمراريتها.',
        fullDescription: 'ترجع القيمة المخزنة في localStorage تحت المفتاح المحدد. إذا لم يوجد المفتاح، ترجع null. يجب استخدام JSON.parse() عند استرجاع كائنات أو مصفوفات.',
        example: 'const username = localStorage.getItem("username");\nconst theme = localStorage.getItem("theme");\nconst settings = JSON.parse(localStorage.getItem("userSettings"));'
    },
    { 
        id: 33, 
        language: 'JavaScript', 
        shortcut: 'sessionStorage', 
        description: 'تخزين مؤقت (لجلسة التصفح فقط)', 
        category: 'Storage',
        importance: 'تسمح بتخزين بيانات مؤقتة تختفي عند إغلاق التبويب، مفيدة للمعلومات الحساسة أو المؤقتة.',
        fullDescription: 'مشابه لـ localStorage لكن البيانات تبقى فقط طالما التبويب مفتوح. بمجرد إغلاق التبويب أو المتصفح، تُحذف جميع البيانات. مفيدة لتخزين بيانات جلسة المستخدم مؤقتاً.',
        example: 'sessionStorage.setItem("currentPage", "checkout");\nconst page = sessionStorage.getItem("currentPage");\n// بعد إغلاق التبويب، تختفي البيانات'
    },

    // ============================================================
    // PYTHON
    // ============================================================
    { 
        id: 34, 
        language: 'Python', 
        shortcut: 'print()', 
        description: 'طباعة في المخرجات', 
        category: 'Basics',
        importance: 'الأداة الأساسية لعرض المخرجات وتصحيح الأخطاء في Python، لا يمكن الاستغناء عنها.',
        fullDescription: 'تطبع القيم المعطاة إلى المخرجات القياسية (عادة الطرفية). تستخدم لعرض النتائج، تتبع تنفيذ البرنامج، أو تصحيح الأخطاء.',
        example: 'print("Hello World")\nprint("العدد:", 42)\nprint("القائمة:", [1, 2, 3])\nprint("مرحباً", "عالم", sep=", ")'
    },
    { 
        id: 35, 
        language: 'Python', 
        shortcut: 'len()', 
        description: 'حساب طول النص أو القائمة', 
        category: 'Basics',
        importance: 'دالة أساسية لمعرفة حجم البيانات، تستخدم بشكل متكرر في الحلقات والتحقق من الحدود.',
        fullDescription: 'ترجع عدد العناصر في الكائن (مثل النص، القائمة، القاموس، أو أي كائن قابل للتكرار). تستخدم بشكل شائع مع حلقات for للتحكم في التكرارات.',
        example: 'len("مرحباً")          # 5\nlen([1, 2, 3, 4])    # 4\nlen({"a": 1, "b": 2}) # 2'
    },
    { 
        id: 36, 
        language: 'Python', 
        shortcut: 'range()', 
        description: 'إنشاء تسلسل أرقام', 
        category: 'Iteration',
        importance: 'أداة أساسية للحلقات التكرارية، تسمح بالتحكم في عدد مرات التكرار بدقة.',
        fullDescription: 'تنشئ كائن قابل للتكرار (iterator) ينتج تسلسلاً من الأرقام. تستخدم بشكل شائع مع حلقة for لتحديد عدد التكرارات أو إنشاء تسلسلات رقمية.',
        example: 'for i in range(5):      # 0, 1, 2, 3, 4\n    print(i)\n\nfor i in range(2, 8):    # 2, 3, 4, 5, 6, 7\n    print(i)\n\nfor i in range(0, 10, 2): # 0, 2, 4, 6, 8\n    print(i)'
    },
    { 
        id: 37, 
        language: 'Python', 
        shortcut: 'enumerate()', 
        description: 'إرجاع الفهرس والقيمة معاً في الحلقات', 
        category: 'Iteration',
        importance: 'تسهل الحصول على كل من الفهرس والقيمة في نفس الوقت، مما يجعل الكود أكثر نظافة وقراءة.',
        fullDescription: 'ترجع كائن قابل للتكرار ينتج أزواج (index, value) لكل عنصر في الكائن القابل للتكرار. مفيدة جداً عندما تحتاج إلى معرفة موقع العنصر أثناء التكرار.',
        example: 'fruits = ["تفاح", "موز", "برتقال"]\nfor index, fruit in enumerate(fruits):\n    print(f"العنصر {index}: {fruit}")\n\n# يمكن تحديد بداية العد\nfor i, fruit in enumerate(fruits, start=1):\n    print(f"#{i}: {fruit}")'
    },
    { 
        id: 38, 
        language: 'Python', 
        shortcut: 'zip()', 
        description: 'دمج قائمتين أو أكثر عنصراً بعنصر', 
        category: 'Iteration',
        importance: 'تسمح بالتكرار على عدة قوائم في نفس الوقت، مما يبسط معالجة البيانات المتوازية.',
        fullDescription: 'ترجع كائن قابل للتكرار ينتج صفوفاً (tuples) من العناصر من القوائم المدخلة، حيث يحتوي الصف الأول على العنصر الأول من كل قائمة، وهكذا. تتوقف عند أقصر قائمة.',
        example: 'names = ["أحمد", "سارة", "محمد"]\nscores = [95, 88, 92]\nfor name, score in zip(names, scores):\n    print(f"{name}: {score}")\n\n# يمكن دمج أكثر من قائمتين\nids = [1, 2, 3]\nfor id, name, score in zip(ids, names, scores):\n    print(f"#{id}: {name} - {score}")'
    },
    { 
        id: 39, 
        language: 'Python', 
        shortcut: 'list.append()', 
        description: 'إضافة عنصر إلى نهاية القائمة', 
        category: 'List Methods',
        importance: 'الطريقة الأساسية والأكثر شيوعاً لإضافة عناصر إلى القوائم ديناميكياً.',
        fullDescription: 'تضيف عنصراً واحداً إلى نهاية القائمة. تعدل القائمة الأصلية ولا ترجع قيمة جديدة. مفيدة جداً لبناء قوائم بشكل تدريجي أثناء تنفيذ البرنامج.',
        example: 'my_list = [1, 2, 3]\nmy_list.append(4)    # [1, 2, 3, 4]\nmy_list.append("أخير") # [1, 2, 3, 4, "أخير"]'
    },
    { 
        id: 40, 
        language: 'Python', 
        shortcut: 'list.insert()', 
        description: 'إدراج عنصر في موقع محدد', 
        category: 'List Methods',
        importance: 'تسمح بالتحكم الدقيق في مكان إدراج العناصر، مفيدة للحفاظ على ترتيب معين.',
        fullDescription: 'تدرج عنصراً في موقع محدد في القائمة. تأخذ معلمتين: الفهرس (الموقع) والقيمة. تزيح العناصر الموجودة إلى اليمين. إذا كان الفهرس أكبر من طول القائمة، تضاف في النهاية.',
        example: 'my_list = [1, 2, 4, 5]\nmy_list.insert(2, 3)  # [1, 2, 3, 4, 5]\nmy_list.insert(0, "بداية") # ["بداية", 1, 2, 3, 4, 5]'
    },
    { 
        id: 41, 
        language: 'Python', 
        shortcut: 'list.pop()', 
        description: 'حذف وإرجاع آخر عنصر', 
        category: 'List Methods',
        importance: 'تسمح بإزالة العناصر مع إمكانية استخدامها، مفيدة لتنفيذ هياكل بيانات مثل المكدس (Stack).',
        fullDescription: 'تزيل العنصر من نهاية القائمة (أو من موقع محدد إذا أعطيت فهرساً) وترجع العنصر المحذوف. إذا لم تعط فهرساً، تحذف آخر عنصر. ترفع خطأ IndexError إذا كانت القائمة فارغة.',
        example: 'my_list = [1, 2, 3, 4]\nlast = my_list.pop()  # last = 4, my_list = [1, 2, 3]\nfirst = my_list.pop(0) # first = 1, my_list = [2, 3]'
    },
    { 
        id: 42, 
        language: 'Python', 
        shortcut: 'list.remove()', 
        description: 'حذف أول عنصر يطابق القيمة', 
        category: 'List Methods',
        importance: 'تسمح بحذف عناصر بناءً على قيمتها، مفيدة جداً لتنظيف البيانات.',
        fullDescription: 'تزيل أول عنصر في القائمة يساوي القيمة المعطاة. ترفع ValueError إذا لم تجد العنصر. تختلف عن pop() لأنها تبحث عن القيمة وليس الفهرس.',
        example: 'my_list = [1, 2, 3, 2, 4]\nmy_list.remove(2)    # [1, 3, 2, 4] (يزيل أول 2 فقط)\n# my_list.remove(5) # يرفع ValueError'
    },
    { 
        id: 43, 
        language: 'Python', 
        shortcut: 'dict.get()', 
        description: 'الحصول على قيمة من القاموس (مع قيمة افتراضية)', 
        category: 'Dict Methods',
        importance: 'طريقة آمنة للوصول إلى قيم القاموس دون التسبب في خطأ KeyError، مع إمكانية تحديد قيمة افتراضية.',
        fullDescription: 'ترجع قيمة المفتاح المعطى إذا كان موجوداً، وإلا ترجع القيمة الافتراضية (None إذا لم تحدد). أفضل من استخدام الأقواس المربعة [] التي ترفع KeyError إذا لم يوجد المفتاح.',
        example: 'my_dict = {"name": "Ali", "age": 25}\nname = my_dict.get("name")       # "Ali"\ncity = my_dict.get("city")       # None\ncity = my_dict.get("city", "غير معروف") # "غير معروف"'
    },
    { 
        id: 44, 
        language: 'Python', 
        shortcut: 'dict.keys()', 
        description: 'إرجاع مفاتيح القاموس', 
        category: 'Dict Methods',
        importance: 'تسمح بالتعامل مع مفاتيح القاموس كمجموعة، مفيدة للتكرار أو التحقق من وجود مفاتيح.',
        fullDescription: 'ترجع كائن مشاهد (view) يحتوي على جميع مفاتيح القاموس. يمكن تحويله إلى قائمة باستخدام list() أو التكرار عليه مباشرة. يعكس أي تغييرات على القاموس الأصلي.',
        example: 'my_dict = {"name": "Ali", "age": 25, "city": "Riyadh"}\nfor key in my_dict.keys():\n    print(key)\n\nkeys_list = list(my_dict.keys()) # ["name", "age", "city"]'
    },
    { 
        id: 45, 
        language: 'Python', 
        shortcut: 'dict.values()', 
        description: 'إرجاع قيم القاموس', 
        category: 'Dict Methods',
        importance: 'تسمح بالتعامل مع قيم القاموس كمجموعة، مفيدة للتكرار على القيم أو تحليلها.',
        fullDescription: 'ترجع كائن مشاهد (view) يحتوي على جميع قيم القاموس. يمكن تحويله إلى قائمة أو التكرار عليه مباشرة. يعكس أي تغييرات على القاموس الأصلي.',
        example: 'my_dict = {"name": "Ali", "age": 25, "city": "Riyadh"}\nfor value in my_dict.values():\n    print(value)\n\nvalues_list = list(my_dict.values()) # ["Ali", 25, "Riyadh"]'
    },
    { 
        id: 46, 
        language: 'Python', 
        shortcut: 'dict.items()', 
        description: 'إرجاع أزواج (مفتاح، قيمة)', 
        category: 'Dict Methods',
        importance: 'الأداة الأكثر استخداماً للتكرار على القواميس، حيث تتيح الوصول إلى المفتاح والقيمة معاً.',
        fullDescription: 'ترجع كائن مشاهد (view) يحتوي على أزواج (مفتاح، قيمة) من القاموس. تستخدم بشكل شائع مع for loop للتكرار على القاموس والحصول على كل من المفتاح والقيمة في نفس الوقت.',
        example: 'my_dict = {"name": "Ali", "age": 25, "city": "Riyadh"}\nfor key, value in my_dict.items():\n    print(f"{key}: {value}")\n\n# يمكن تحويلها إلى قائمة من الأزواج\nitems_list = list(my_dict.items()) # [("name", "Ali"), ("age", 25), ("city", "Riyadh")]'
    },
    { 
        id: 47, 
        language: 'Python', 
        shortcut: 'set()', 
        description: 'إنشاء مجموعة (عناصر فريدة)', 
        category: 'Sets',
        importance: 'تسمح بإزالة التكرارات من البيانات والتعامل مع العمليات الرياضية على المجموعات بشكل فعال.',
        fullDescription: 'تنشئ مجموعة (Set) من العناصر الفريدة. تزيل أي تكرار وتوفر عمليات مثل الاتحاد، التقاطع، والفرق. مفيدة جداً لإزالة المكررات والتحقق من العضوية بسرعة.',
        example: 'my_set = set([1, 2, 2, 3, 3, 4]) # {1, 2, 3, 4}\nmy_set.add(5)                          # {1, 2, 3, 4, 5}\n# عمليات المجموعات\nset_a = {1, 2, 3}\nset_b = {3, 4, 5}\nunion = set_a | set_b      # {1, 2, 3, 4, 5}\nintersection = set_a & set_b # {3}\ndifference = set_a - set_b   # {1, 2}'
    },
    { 
        id: 48, 
        language: 'Python', 
        shortcut: 'sorted()', 
        description: 'إرجاع نسخة مرتبة من القائمة', 
        category: 'Sorting',
        importance: 'تسمح بترتيب البيانات دون تعديل الأصلية، مع إمكانية تخصيص معايير الفرز.',
        fullDescription: 'ترجع قائمة جديدة مرتبة من العناصر في الكائن القابل للتكرار. لا تعدل الكائن الأصلي. تقبل معاملات مثل reverse و key لتخصيص الفرز حسب دالة معينة.',
        example: 'numbers = [3, 1, 4, 1, 5, 9, 2]\nsorted_numbers = sorted(numbers)    # [1, 1, 2, 3, 4, 5, 9]\nsorted_desc = sorted(numbers, reverse=True) # [9, 5, 4, 3, 2, 1, 1]\n\n# فرز حسب طول النص\nwords = ["apple", "banana", "kiwi", "orange"]\nsorted_words = sorted(words, key=len) # ["kiwi", "apple", "banana", "orange"]'
    },
    { 
        id: 49, 
        language: 'Python', 
        shortcut: 'reversed()', 
        description: 'عكس الترتيب', 
        category: 'Iteration',
        importance: 'تسمح بالتكرار على العناصر بترتيب عكسي دون تعديل البيانات الأصلية.',
        fullDescription: 'ترجع مكرراً (iterator) يعطي العناصر بترتيب عكسي. لا تعدل القائمة الأصلية. مفيدة عندما تحتاج إلى التكرار على البيانات من النهاية إلى البداية.',
        example: 'numbers = [1, 2, 3, 4, 5]\nfor num in reversed(numbers):\n    print(num)  # 5, 4, 3, 2, 1\n\n# يمكن تحويلها إلى قائمة\nreversed_list = list(reversed(numbers)) # [5, 4, 3, 2, 1]'
    },
    { 
        id: 50, 
        language: 'Python', 
        shortcut: 'map()', 
        description: 'تطبيق دالة على كل عنصر', 
        category: 'Functional',
        importance: 'تطبق تحويلاً على جميع عناصر المجموعة بكفاءة، وتدعم البرمجة الوظيفية.',
        fullDescription: 'تطبق دالة معينة على كل عنصر في الكائن القابل للتكرار، وترجع مكرراً (iterator) بالنتائج. تستخدم مع وظائف lambda أو دوال محددة مسبقاً لتحويل البيانات.',
        example: 'numbers = [1, 2, 3, 4, 5]\ndoubled = map(lambda x: x * 2, numbers) # مكرر\nlist(doubled) # [2, 4, 6, 8, 10]\n\n# استخدام دالة موجودة\nnames = ["ali", "sara", "ahmed"]\ncapitalized = map(str.capitalize, names)\nlist(capitalized) # ["Ali", "Sara", "Ahmed"]'
    },
    { 
        id: 51, 
        language: 'Python', 
        shortcut: 'filter()', 
        description: 'تصفية العناصر حسب شرط', 
        category: 'Functional',
        importance: 'تسمح باستخراج عناصر محددة بناءً على شرط، مع الحفاظ على كفاءة عالية.',
        fullDescription: 'تبني مكرراً (iterator) من العناصر التي تجتاز اختبار الدالة. ترجع فقط العناصر التي ترجع الدالة لها True. مفيدة لتصفية البيانات بناءً على شروط معقدة.',
        example: 'numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = filter(lambda x: x % 2 == 0, numbers)\nlist(evens) # [2, 4, 6, 8, 10]\n\n# تصفية النصوص\nwords = ["apple", "banana", "kiwi", "orange"]\nlong_words = filter(lambda w: len(w) > 5, words)\nlist(long_words) # ["banana", "orange"]'
    },
    { 
        id: 52, 
        language: 'Python', 
        shortcut: 'lambda', 
        description: 'إنشاء دالة مجهولة (سطر واحد)', 
        category: 'Functional',
        importance: 'تسمح بإنشاء دوال صغيرة وسريعة دون الحاجة لتعريف كامل باستخدام def، مما يجعل الكود أكثر اختصاراً.',
        fullDescription: 'تنشئ دالة مجهولة (بدون اسم) في سطر واحد. تستخدم بشكل شائع مع دوال مثل map()، filter()، و sorted() حيث نحتاج إلى دالة بسيطة مؤقتة. تأخذ أي عدد من المعاملات وتحتوي على تعبير واحد فقط.',
        example: 'add = lambda x, y: x + y\nadd(5, 3) # 8\n\n# استخدام مع map\nnumbers = [1, 2, 3, 4]\nsquared = map(lambda x: x**2, numbers)\nlist(squared) # [1, 4, 9, 16]\n\n# استخدام مع sorted\npeople = [{"name": "Ali", "age": 25}, {"name": "Sara", "age": 30}]\nsorted_people = sorted(people, key=lambda p: p["age"])'
    },
    { 
        id: 53, 
        language: 'Python', 
        shortcut: 'with open() as', 
        description: 'فتح ملف بشكل آمن (يغلق تلقائياً)', 
        category: 'File I/O',
        importance: 'تضمن إغلاق الملف تلقائياً حتى في حالة حدوث خطأ، مما يمنع تسرب الموارد ويجعل الكود أكثر أماناً.',
        fullDescription: 'تُستخدم لإدارة فتح وإغلاق الملفات بشكل آمن. تضمن إغلاق الملف تلقائياً عند الخروج من الكتلة، حتى إذا حدث استثناء. تعتبر أفضل ممارسة (Best Practice) للتعامل مع الملفات.',
        example: '# كتابة إلى ملف\nwith open("file.txt", "w") as f:\n    f.write("مرحباً بالعالم")\n\n# قراءة من ملف\nwith open("file.txt", "r") as f:\n    content = f.read()\n    print(content)\n\n# إلحاق (إضافة) إلى ملف\nwith open("file.txt", "a") as f:\n    f.write("\\nسطر جديد")'
    },
    { 
        id: 54, 
        language: 'Python', 
        shortcut: 'try/except', 
        description: 'معالجة الأخطاء', 
        category: 'Error Handling',
        importance: 'تسمح بالتعامل مع الأخطاء بشكل متحكم، مما يجعل البرنامج أكثر استقراراً ويمنع التوقف المفاجئ.',
        fullDescription: 'تسمح بمحاولة تنفيذ كود معين، وعند حدوث خطأ (استثناء) تنتقل إلى كتلة except للتعامل معه. يمكن تحديد أنواع محددة من الاستثناءات للتعامل معها بشكل مختلف.',
        example: 'try:\n    x = int(input("أدخل رقم: "))\n    result = 10 / x\n    print(f"النتيجة: {result}")\nexcept ValueError:\n    print("خطأ: الرجاء إدخال رقم صحيح")\nexcept ZeroDivisionError:\n    print("خطأ: لا يمكن القسمة على صفر")\nexcept Exception as e:\n    print(f"خطأ غير متوقع: {e}")\nelse:\n    print("تم التنفيذ بدون أخطاء")\nfinally:\n    print("هذا ينفذ دائماً")'
    },
    { 
        id: 55, 
        language: 'Python', 
        shortcut: 'class', 
        description: 'تعريف فئة جديدة', 
        category: 'OOP',
        importance: 'تسمح بتعريف أنواع جديدة من الكائنات، مما ينظم الكود ويعزز إعادة الاستخدام في البرمجة الكائنية.',
        fullDescription: 'تُستخدم لتعريف فئة جديدة في البرمجة الكائنية. تحتوي الفئة على خصائص (attributes) ودوال (methods). يمكن إنشاء كائنات (objects) من الفئة. الفئات تجعل الكود أكثر تنظيماً وقابلية لإعادة الاستخدام.',
        example: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f"مرحباً، أنا {self.name} وعمري {self.age} سنة"\n\n# إنشاء كائن\nperson1 = Person("أحمد", 25)\nprint(person1.greet())  # "مرحباً، أنا أحمد وعمري 25 سنة"'
    },
    { 
        id: 56, 
        language: 'Python', 
        shortcut: 'def __init__', 
        description: 'دالة البناء في الفئات', 
        category: 'OOP',
        importance: 'دالة خاصة تُستدعى تلقائياً عند إنشاء كائن جديد، تستخدم لتهيئة خصائص الكائن.',
        fullDescription: 'هي دالة بناء (constructor) خاصة في الفئات، تُستدعى تلقائياً عند إنشاء كائن جديد من الفئة. تستخدم لتهيئة خصائص الكائن أو تنفيذ أي إجراءات تحتاجها عند الإنشاء. توضع بين شرطتين سفليتين (dunder).',
        example: 'class Student:\n    def __init__(self, name, grade):\n        self.name = name\n        self.grade = grade\n        self.passed = grade >= 50\n    \n    def info(self):\n        status = "ناجح" if self.passed else "راسب"\n        return f"{self.name}: {self.grade} - {status}"\n\ns1 = Student("أحمد", 85)\ns2 = Student("سارة", 45)\nprint(s1.info())  # "أحمد: 85 - ناجح"'
    },
    { 
        id: 57, 
        language: 'Python', 
        shortcut: 'self', 
        description: 'الإشارة إلى الكائن الحالي', 
        category: 'OOP',
        importance: 'تسمح بالوصول إلى خصائص ودوال الكائن الحالي داخل الفئة، وهي أساس البرمجة الكائنية في Python.',
        fullDescription: 'self هو المعامل الأول في دوال الفئة (methods)، ويشير إلى الكائن الحالي الذي تُستدعى منه الدالة. يسمح بالوصول إلى خصائص الكائن ودواله الأخرى. اسم self ليس إجبارياً لكنه تقليد شائع.',
        example: 'class Book:\n    def __init__(self, title, author):\n        self.title = title      # self تشير إلى الكائن الحالي\n        self.author = author\n    \n    def display(self):\n        return f"كتاب: {self.title} للمؤلف {self.author}"\n\nbook = Book("البحث عن الزمن المفقود", "مارسيل بروست")\nprint(book.display())  # "كتاب: البحث عن الزمن المفقود للمؤلف مارسيل بروست"'
    },
    { 
        id: 58, 
        language: 'Python', 
        shortcut: '@staticmethod', 
        description: 'تعريف دالة ثابتة', 
        category: 'OOP',
        importance: 'تسمح بتعريف دوال تابعة للفئة ولا تحتاج إلى كائن، مفيدة للوظائف المساعدة المرتبطة بالفئة منطقياً.',
        fullDescription: 'تعرف دالة ثابتة (static method) تابعة للفئة وليس للكائن. لا تأخذ self أو cls كمعامل. يمكن استدعاؤها مباشرة من الفئة دون الحاجة لإنشاء كائن. تستخدم للوظائف المساعدة التي ترتبط بالفئة منطقياً.',
        example: 'class MathUtils:\n    @staticmethod\n    def add(x, y):\n        return x + y\n    \n    @staticmethod\n    def multiply(x, y):\n        return x * y\n\n# استدعاء دون إنشاء كائن\nresult = MathUtils.add(5, 3)        # 8\nproduct = MathUtils.multiply(4, 7)  # 28'
    },
    { 
        id: 59, 
        language: 'Python', 
        shortcut: '@classmethod', 
        description: 'تعريف دالة خاصة بالفئة', 
        category: 'OOP',
        importance: 'تسمح بتعريف دوال تعمل على مستوى الفئة بدل الكائن، مفيدة لإنشاء كائنات بطرق بديلة (factory methods).',
        fullDescription: 'تعرف دالة فئة (class method) تأخذ cls كمعامل أول (تشير إلى الفئة نفسها). يمكن استخدامها لإنشاء كائنات بطرق بديلة أو تعديل حالة الفئة. تختلف عن staticmethod لأنها تعرف على الفئة وليس على الكائن.',
        example: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    @classmethod\n    def from_birth_year(cls, name, birth_year):\n        # طريقة بديلة لإنشاء كائن باستخدام سنة الميلاد\n        import datetime\n        current_year = datetime.datetime.now().year\n        age = current_year - birth_year\n        return cls(name, age)\n\np1 = Person.from_birth_year("أحمد", 1995)\nprint(f"{p1.name}: {p1.age} سنة")'
    },
    { 
        id: 60, 
        language: 'Python', 
        shortcut: 'pass', 
        description: 'عنصر نائب (لا يفعل شيئاً)', 
        category: 'Basics',
        importance: 'يسمح بتركيب كود صحيح نحويًا مع ترك التنفيذ لوقت لاحق، مفيد أثناء التطوير أو عند تعريف هيكل البرنامج.',
        fullDescription: 'هو عبارة فارغة لا تفعل شيئاً. يستخدم عندما يكون هناك حاجة نحوية لوجود عبارة ولكن لا يوجد شيء لتنفيذه. شائع الاستخدام في تعريف دوال أو كلاسات أو حلقات فارغة مؤقتاً.',
        example: 'def future_function():\n    # سأكتب هذا لاحقاً\n    pass\n\nclass FutureClass:\n    pass\n\nfor i in range(10):\n    if i % 2 == 0:\n        pass  # لا تفعل شيئاً للأرقام الزوجية\n    else:\n        print(i)'
    },
    { 
        id: 61, 
        language: 'Python', 
        shortcut: 'is', 
        description: 'مقارنة الهوية (وليس القيمة)', 
        category: 'Operators',
        importance: 'تسمح بمقارنة ما إذا كان الكائنان يشيران إلى نفس الموقع في الذاكرة، وليس فقط قيمتهما. مهم جداً للتحقق من None والتعامل مع الكائنات الفريدة.',
        fullDescription: 'تقارن هوية الكائنين، وليس قيمهما. ترجع True إذا كان الكائنان يشيران إلى نفس الكائن في الذاكرة. تختلف عن == التي تقارن القيمة. تستخدم بشكل شائع للتحقق من None.',
        example: 'a = [1, 2, 3]\nb = [1, 2, 3]\nc = a\n\na == b   # True (قيم متساوية)\na is b   # False (كائنان مختلفان)\na is c   # True (نفس الكائن)\n\n# التحقق من None\nx = None\nif x is None:\n    print("x يساوي None")\n\n# مقارنة boolean\nTrue is True   # True\nFalse is False # True'
    },
    { 
        id: 62, 
        language: 'Python', 
        shortcut: 'isinstance()', 
        description: 'التحقق من نوع الكائن', 
        category: 'Basics',
        importance: 'تسمح بالتحقق من نوع الكائن بطريقة آمنة تدعم الوراثة (inheritance)، أفضل من type() للتحقق من الأنواع.',
        fullDescription: 'تتحقق مما إذا كان الكائن المعطى ينتمي إلى النوع المعطى (أو أي نوع مشتق منه). ترجع True إذا كان الكائن مثيلاً للنوع أو أي من الأنواع المشتقة منه. تستخدم للتحقق من الأنواع قبل العمليات عليها.',
        example: 'isinstance(5, int)        # True\nisinstance("hello", str)   # True\nisinstance([1,2,3], list)  # True\nisinstance([1,2,3], object) # True (كل شيء يرث من object)\n\n# التحقق من أنواع متعددة\nisinstance(5, (int, float)) # True\nisinstance(5.5, (int, float)) # True\nisinstance("text", (int, float)) # False'
    },

    // ============================================================
    // GIT
    // ============================================================
    { 
        id: 63, 
        language: 'Git', 
        shortcut: 'git init', 
        description: 'إنشاء مستودع Git جديد', 
        category: 'Repository',
        importance: 'الخطوة الأولى لأي مشروع يستخدم Git، تبدأ تتبع إصدارات المشروع.',
        fullDescription: 'ينشئ مستودع Git جديد في المجلد الحالي. يقوم بإنشاء مجلد .git يحتوي على جميع ملفات التتبع. يجب تنفيذ هذا الأمر في جذر المشروع قبل البدء بأي عمليات Git.',
        example: 'cd my-project\ngit init\n# الآن يمكنك البدء بإضافة الملفات وتتبعها'
    },
    { 
        id: 64, 
        language: 'Git', 
        shortcut: 'git clone <url>', 
        description: 'نسخ مستودع عن بعد', 
        category: 'Repository',
        importance: 'الطريقة الأساسية للحصول على نسخة محلية من مشروع موجود على GitHub أو أي خدمة أخرى.',
        fullDescription: 'ينشئ نسخة محلية من مستودع بعيد. يقوم بتنزيل جميع الملفات وسجل الـ commits ويضبط الاتصال بالمستودع البعيد تلقائياً. يستخدم للبدء في العمل على مشروع موجود مسبقاً.',
        example: 'git clone https://github.com/user/repo.git\n# ينشئ مجلد repo ويحمل جميع الملفات\n# أو باستخدام SSH\ngit clone git@github.com:user/repo.git'
    },
    { 
        id: 65, 
        language: 'Git', 
        shortcut: 'git add .', 
        description: 'إضافة جميع الملفات إلى مرحلة التتبع', 
        category: 'Staging',
        importance: 'يجهز جميع التغييرات (الجديدة والمعدلة) ليتم حفظها في الـ commit القادم، أهم خطوة قبل الـ commit.',
        fullDescription: 'يضيف جميع الملفات المغيَّرة والجديدة في المجلد الحالي (وجميع المجلدات الفرعية) إلى مرحلة التتبع (staging area). هذا يعني أن هذه التغييرات جاهزة ليتم حفظها في الـ commit القادم.',
        example: '# بعد تعديل عدة ملفات\ngit add .\n# جميع التغييرات جاهزة للـ commit\n# أو إضافة ملفات محددة\ngit add index.html style.css'
    },
    { 
        id: 66, 
        language: 'Git', 
        shortcut: 'git add <file>', 
        description: 'إضافة ملف محدد', 
        category: 'Staging',
        importance: 'تسمح بالتحكم الدقيق في الملفات التي تريد إضافتها للـ commit، بدلاً من إضافة كل شيء دفعة واحدة.',
        fullDescription: 'يضيف ملفاً محدداً أو أكثر إلى مرحلة التتبع. مفيد جداً عندما تريد عمل commit منفصل لكل ملف أو مجموعة معينة من الملفات. يمكن إضافة ملفات متعددة في أمر واحد.',
        example: 'git add index.html\n# إضافة ملف واحد\ngit add style.css script.js\n# إضافة عدة ملفات\ngit add src/*.js\n# إضافة جميع ملفات JavaScript في مجلد src'
    },
    { 
        id: 67, 
        language: 'Git', 
        shortcut: 'git commit -m "message"', 
        description: 'حفظ التغييرات مع رسالة', 
        category: 'Committing',
        importance: 'يأخذ لقطة (snapshot) من التغييرات المرحَّلة ويحفظها في تاريخ المشروع مع رسالة وصفية.',
        fullDescription: 'يحفظ التغييرات الموجودة في مرحلة التتبع (staging area) في تاريخ المشروع. يجب كتابة رسالة وصفية (commit message) تعبر عن ماهية التغييرات. الرسائل الجيدة تجعل تاريخ المشروع واضحاً.',
        example: 'git commit -m "إضافة صفحة الاتصال وتحديث التنسيقات"\n# رسالة واضحة تصف التغييرات\n\n# أفضل الممارسات:\n# استخدم زمن المضارع\n# اشرح WHY وليس WHAT'
    },
    { 
        id: 68, 
        language: 'Git', 
        shortcut: 'git commit --amend', 
        description: 'تعديل آخر commit', 
        category: 'Committing',
        importance: 'يسمح بتصحيح آخر commit بدون إنشاء commit جديد، مفيد جداً لإصلاح الأخطاء في الرسالة أو إضافة ملفات نسيتها.',
        fullDescription: 'يعدل آخر commit من خلال استبداله بـ commit جديد. يمكن استخدامه لتغيير رسالة الـ commit، إضافة ملفات نسيت إضافتها، أو إزالة ملفات لا تريدها. لكن يجب استخدامه بحذر لأن يعيد كتابة التاريخ.',
        example: '# إذا نسيت إضافة ملف للـ commit الأخير\ngit add forgotten_file.txt\ngit commit --amend\n\n# لتغيير رسالة الـ commit فقط\ngit commit --amend -m "رسالة جديدة أكثر وضوحاً"\n\n# تنبيه: لا تستخدم مع commits تم دفعها بالفعل للمستودع البعيد'
    },
    { 
        id: 69, 
        language: 'Git', 
        shortcut: 'git push', 
        description: 'رفع التغييرات إلى المستودع البعيد', 
        category: 'Remote',
        importance: 'ينقل التغييرات المحلية إلى المستودع البعيد، مما يجعلها متاحة للفريق أو النشر.',
        fullDescription: 'يرفع الـ commits المحلية إلى المستودع البعيد. عادة تستخدم مع الفرع الذي تعمل عليه. يجب أن تكون متزامناً مع التغييرات البعيدة قبل الـ push (باستخدام pull أولاً).',
        example: '# رفع إلى الفرع الأساسي (main)\ngit push origin main\n\n# رفع إلى فرع آخر\ngit push origin feature-branch\n\n# رفع جميع الفروع\ngit push --all\n\n# رفع وإنشاء فرع بعيد جديد\ngit push -u origin new-branch'
    },
    { 
        id: 70, 
        language: 'Git', 
        shortcut: 'git pull', 
        description: 'سحب التغييرات من المستودع البعيد', 
        category: 'Remote',
        importance: 'يجلب التغييرات من المستودع البعيد ويدمجها مع الفرع الحالي، مهم لتحديث الكود المحلي بأحدث التغييرات.',
        fullDescription: 'يجمع بين git fetch و git merge في أمر واحد. يجلب التغييرات من المستودع البعيد ويدمجها مع الفرع الحالي. يجب استخدامه قبل بدء العمل للتأكد من أن الكود محدد بأحدث التغييرات.',
        example: '# تحديث الفرع الحالي\ngit pull origin main\n\n# سحب من فرع محدد\ngit pull origin feature-branch\n\n# سحب مع إعادة أساس (rebase) بدلاً من دمج\ngit pull --rebase origin main'
    },
    { 
        id: 71, 
        language: 'Git', 
        shortcut: 'git fetch', 
        description: 'جلب التغييرات دون دمجها', 
        category: 'Remote',
        importance: 'يجلب التغييرات من المستودع البعيد دون التأثير على الكود المحلي، مفيد لمراجعة التغييرات قبل دمجها.',
        fullDescription: 'يجلب التغييرات (الـ commits والفروع) من المستودع البعيد دون دمجها مع الفرع المحلي. يسمح لك برؤية التغييرات الجديدة قبل اتخاذ قرار بدمجها. أكثر أماناً من pull لأن لا يعدل الكود المحلي تلقائياً.',
        example: '# جلب آخر التغييرات من المستودع البعيد\ngit fetch origin\n\n# جلب فرع معين\ngit fetch origin main\n\n# عرض التغييرات الجديدة\n# ثم يمكنك دمجها بعد المراجعة\ngit merge origin/main'
    },
    { 
        id: 72, 
        language: 'Git', 
        shortcut: 'git status', 
        description: 'عرض حالة الملفات', 
        category: 'Info',
        importance: 'أكثر أوامر Git استخداماً، يعطي نظرة سريعة على حالة الملفات والتغييرات. ضروري لفهم ما يحدث في المستودع.',
        fullDescription: 'يعرض معلومات عن حالة الدليل الحالي: الملفات غير المتتبعة، الملفات المعدلة، الملفات في مرحلة التتبع، والـ commits التي لم ترفع بعد. يساعدك على معرفة الخطوة التالية التي يجب القيام بها.',
        example: 'git status\n# سترى معلومات مثل:\n# - الملفات التي تغيرت\n# - الملفات الجديدة غير المتتبعة\n# - الملفات في مرحلة التتبع (staged)\n# - الـ commits التي لم ترفع للخادم'
    },
    { 
        id: 73, 
        language: 'Git', 
        shortcut: 'git log', 
        description: 'عرض سجل الـ commits', 
        category: 'Info',
        importance: 'يعرض تاريخ المشروع كاملاً، يساعد في تتبع التغييرات وفهم تطور الكود.',
        fullDescription: 'يعرض سجل جميع الـ commits في المستودع بالترتيب العكسي (الأحدث أولاً). يظهر كل commit مع معرفه الفريد (hash)، المؤلف، التاريخ، والرسالة. مفيد جداً لفهم تاريخ المشروع.',
        example: '# عرض السجل الكامل\ngit log\n\n# عرض سجل مختصر مع commit واحد في كل سطر\ngit log --oneline\n\n# عرض آخر N commits\ngit log -5\n\n# عرض سجل مع تغييرات الملفات\ngit log --stat\n\n# عرض سجل مع رسم بياني للفروع\ngit log --graph'
    },
    { 
        id: 74, 
        language: 'Git', 
        shortcut: 'git log --oneline', 
        description: 'عرض سجل مختصر', 
        category: 'Info',
        importance: 'يعطي نظرة سريعة على تاريخ المشروع في سطر واحد لكل commit، مما يسهل عرض سجل الـ commits بشكل مكثف.',
        fullDescription: 'عرض سجل الـ commits بشكل مختصر حيث يعرض كل commit في سطر واحد مع معرفه المختصر (7 خانات من الـ hash) ورسالة الـ commit. مفيد جداً للحصول على نظرة عامة سريعة على تاريخ المشروع.',
        example: 'git log --oneline\n# مثال:\n# a1b2c3d إضافة صفحة جديدة\n# b2c3d4e تحديث التنسيقات\n# c3d4e5f إصلاح مشكلة في النموذج'
    },
    { 
        id: 75, 
        language: 'Git', 
        shortcut: 'git branch', 
        description: 'عرض الفروع', 
        category: 'Branches',
        importance: 'يعرض جميع الفروع المحلية، مع تمييز الفرع الحالي، مما يساعد في إدارة الفروع وفهم هيكل المشروع.',
        fullDescription: 'يعرض قائمة بجميع الفروع المحلية في المستودع. الفرع الحالي مميز بعلامة * بجانبه. يساعد في معرفة الفروع المتاحة وأي فرع أنت عليه حالياً.',
        example: '# عرض جميع الفروع\ngit branch\n# * main\n#   feature-login\n#   feature-dashboard\n\n# عرض الفروع مع آخر commit\n# git branch -v\n\n# عرض الفروع البعيدة أيضاً\ngit branch -a'
    },
    { 
        id: 76, 
        language: 'Git', 
        shortcut: 'git branch <name>', 
        description: 'إنشاء فرع جديد', 
        category: 'Branches',
        importance: 'يسمح بإنشاء فرع جديد لعمل ميزة جديدة أو تجربة دون التأثير على الكود الأساسي.',
        fullDescription: 'ينشئ فرعاً جديداً بالاسم المعطى. الفرع الجديد سيكون نسخة من الفرع الحالي. هذا يسمح بالعمل على ميزات جديدة أو إصلاحات بشكل معزول عن الفرع الرئيسي.',
        example: '# إنشاء فرع جديد\ngit branch new-feature\n\n# إنشاء فرع والانتقال إليه في خطوة واحدة\ngit checkout -b new-feature\n\n# أو باستخدام git switch\ngit switch -c new-feature'
    },
    { 
        id: 77, 
        language: 'Git', 
        shortcut: 'git checkout <branch>', 
        description: 'التبديل إلى فرع آخر', 
        category: 'Branches',
        importance: 'يسمح بالتنقل بين الفروع للعمل على ميزات مختلفة أو مراجعة الكود.',
        fullDescription: 'يبدل بين الفروع في المستودع المحلي. عند التبديل، يتم تحديث الملفات في دليل العمل لتطابق الفرع المستهدف. يجب أن تكون التغييرات الحالية محفوظة (committed) أو مخبأة (stashed) قبل التبديل.',
        example: '# التبديل إلى فرع آخر\ngit checkout feature-login\n\n# التبديل وإنشاء فرع جديد\ngit checkout -b new-feature\n\n# التبديل إلى commit معين\ngit checkout a1b2c3d'
    },
    { 
        id: 78, 
        language: 'Git', 
        shortcut: 'git switch <branch>', 
        description: 'التبديل إلى فرع (بديل حديث)', 
        category: 'Branches',
        importance: 'أمر جديد وموصى به للتبديل بين الفروع، أكثر وضوحاً وأقل احتمالية للالتباس من checkout.',
        fullDescription: 'هو بديل حديث لأمر git checkout للتبديل بين الفروع. تم إضافته في Git 2.23. أكثر وضوحاً في الوظيفة من git checkout الذي يقوم بمهام متعددة (تبديل فروع، استعادة ملفات).',
        example: '# التبديل إلى فرع آخر\ngit switch feature-login\n\n# إنشاء فرع جديد والتبديل إليه\ngit switch -c new-feature\n\n# التبديل إلى commit سابق (فصل HEAD)\ngit switch -d a1b2c3d'
    },
    { 
        id: 79, 
        language: 'Git', 
        shortcut: 'git merge <branch>', 
        description: 'دمج فرع مع الفرع الحالي', 
        category: 'Branches',
        importance: 'يدمج التغييرات من فرع آخر مع الفرع الحالي، وهي عملية أساسية لجمع العمل من فرق مختلفة.',
        fullDescription: 'يدمج التغييرات من الفرع المحدد إلى الفرع الحالي. يقوم بإنشاء commit جديد للدمج إذا كان هناك تغييرات في كلا الفرعين. يجب حل أي تعارضات (conflicts) تحدث أثناء الدمج.',
        example: '# أولاً انتقل إلى الفرع الرئيسي\ngit checkout main\n\n# ثم دمج فرع الميزة\ngit merge feature-login\n\n# إذا حدثت تعارضات، قم بحلها يدوياً ثم\n# git add . && git commit\n\n# دمج مع إنشاء commit سريع (fast-forward)\ngit merge --ff-only feature-login'
    },
    { 
        id: 80, 
        language: 'Git', 
        shortcut: 'git rebase <branch>', 
        description: 'إعادة ترتيب الـ commits', 
        category: 'Branches',
        importance: 'يقوم بإعادة تطبيق الـ commits من فرع على رأس فرع آخر، مما ينتج عنه تاريخ خطي ونظيف.',
        fullDescription: 'يعيد تطبيق الـ commits من الفرع الحالي على رأس الفرع المحدد. هذا ينتج تاريخاً خطياً (بدون commit للدمج) مما يجعله أكثر نظافة. لكنه يعيد كتابة التاريخ، لذا يجب استخدامه بحذر على الفروع المشتركة.',
        example: '# انتقل إلى الفرع المراد إعادة أساسه\ngit checkout feature-branch\n\n# قم بإعادة أساسه على main\ngit rebase main\n\n# إذا كان لديك تعارضات، قم بحلها\n# git add . && git rebase --continue\n\n# إعادة أساس تفاعلية لدمج أو تعديل commits\ngit rebase -i HEAD~3'
    },
    { 
        id: 81, 
        language: 'Git', 
        shortcut: 'git reset --hard', 
        description: 'العودة إلى commit سابق (حذف التغييرات)', 
        category: 'Undo',
        importance: 'يسمح بالتراجع عن التغييرات بشكل كامل، مفيد جداً لتجربة أشياء جديدة والعودة لنقطة آمنة.',
        fullDescription: 'يعيد المستودع إلى commit سابق ويحذف جميع التغييرات (committed وغير committed) بعد ذلك الـ commit. هذا أمر خطير لأنه يحذف التغييرات نهائياً. يستخدم بحذر شديد، خاصة على الفروع المشتركة.',
        example: '# العودة إلى commit سابق (مع حذف التغييرات)\ngit reset --hard HEAD~1\n\n# العودة إلى commit محدد\ngit reset --hard a1b2c3d\n\n# الرجوع إلى حالة الفرع البعيد\ngit reset --hard origin/main'
    },
    { 
        id: 82, 
        language: 'Git', 
        shortcut: 'git reset --soft', 
        description: 'العودة مع الاحتفاظ بالتغييرات', 
        category: 'Undo',
        importance: 'يسمح بالتراجع عن الـ commits مع الاحتفاظ بالتغييرات في منطقة العمل، مما يتيح إعادة تنظيمها.',
        fullDescription: 'يعيد المستودع إلى commit سابق لكن يحافظ على التغييرات في مرحلة التتبع (staging). مفيد جداً عندما تريد دمج عدة commits في commit واحد أو إعادة تنظيم التغييرات قبل الـ commit.',
        example: '# تراجع عن commit واحد واحتفظ بالتغييرات\ngit reset --soft HEAD~1\n\n# التغييرات تبقى في staging\n# يمكنك تعديلها ثم commit مرة أخرى\n\n# دمج عدة commits في واحد\ngit reset --soft HEAD~3\ngit commit -m "ميزة جديدة موحدة"'
    },
    { 
        id: 83, 
        language: 'Git', 
        shortcut: 'git stash', 
        description: 'حفظ التغييرات مؤقتاً', 
        category: 'Stashing',
        importance: 'يسمح بحفظ التغييرات الغير محفوظة مؤقتاً للتبديل بين الفروع دون فقدان العمل.',
        fullDescription: 'يحفظ التغييرات غير المحفوظة (غير committed) في مكان مؤقت (stash) ويعيد الدليل إلى حالة الفرع آخر commit. مفيد جداً عندما تبدأ العمل على شيء ثم تحتاج فجأة للتبديل إلى فرع آخر.',
        example: '# حفظ التغييرات الحالية\ngit stash\n\n# حفظ مع رسالة وصفية\ngit stash save "WIP: زر التسجيل"\n\n# عرض قائمة التغييرات المحفوظة\ngit stash list\n\n# استرجاع آخر تغيير محفوظ\ngit stash pop'
    },
    { 
        id: 84, 
        language: 'Git', 
        shortcut: 'git stash pop', 
        description: 'استرجاع التغييرات المحفوظة', 
        category: 'Stashing',
        importance: 'يستعيد التغييرات المحفوظة مؤقتاً ويطبقها على الكود الحالي، مع حذفها من الـ stash.',
        fullDescription: 'يستعيد آخر تغيير تم حفظه في الـ stash ويطبقه على دليل العمل الحالي، ثم يحذف هذا التغيير من الـ stash. إذا حدثت تعارضات (conflicts)، لن يتم حذف التغيير من الـ stash.',
        example: '# استرجاع آخر تغيير محفوظ\ngit stash pop\n\n# إذا حدثت تعارضات، قم بحلها\n# ثم استمر في التطوير\n\n# استرجاع تغيير معين من القائمة\ngit stash pop stash@{2}'
    },
    { 
        id: 85, 
        language: 'Git', 
        shortcut: 'git diff', 
        description: 'عرض التغييرات غير المحفوظة', 
        category: 'Info',
        importance: 'يعرض التغييرات الدقيقة في الملفات قبل إضافتها للـ commit، مما يسمح بمراجعة التغييرات بدقة.',
        fullDescription: 'يعرض الفروقات بين الملفات الحالية وآخر commit. يظهر التغييرات سطراً بسطر مع إضافة (+) وحذف (-). مفيد جداً لمراجعة التغييرات قبل إضافتها للـ commit.',
        example: '# عرض التغييرات في جميع الملفات\ngit diff\n\n# عرض التغييرات في ملف محدد\ngit diff index.html\n\n# عرض التغييرات في مرحلة التتبع\ngit diff --staged\n\n# عرض الفرق بين فرعين\ngit diff main..feature-branch'
    },
    { 
        id: 86, 
        language: 'Git', 
        shortcut: 'git remote -v', 
        description: 'عرض المستودعات البعيدة', 
        category: 'Remote',
        importance: 'يعرض روابط المستودعات البعيدة المتصلة، مفيد للتحقق من الإعدادات وأي المستودعات البعيدة متصلة.',
        fullDescription: 'يعرض قائمة بجميع المستودعات البعيدة المتصلة بالمستودع المحلي، مع روابط الـ fetch و push. يظهر عادة origin كاسم افتراضي للمستودع البعيد الرئيسي.',
        example: 'git remote -v\n# origin  https://github.com/user/repo.git (fetch)\n# origin  https://github.com/user/repo.git (push)\n\n# يمكن إضافة مستودع بعيد جديد\n# git remote add upstream https://github.com/other/repo.git'
    },
    { 
        id: 87, 
        language: 'Git', 
        shortcut: 'git tag', 
        description: 'إدارة العلامات (Tags)', 
        category: 'Tags',
        importance: 'يسمح بوضع علامات على نقاط محددة في تاريخ المشروع، مثل الإصدارات (v1.0, v2.0).',
        fullDescription: 'يستخدم لوضع علامات (tags) على commits محددة لتحديد إصدارات المشروع. العلامات تكون عادة ثابتة ولا تتغير (بخلاف الفروع). تستخدم لتحديد إصدارات مهمة مثل الإصدارات التي تم نشرها.',
        example: '# إنشاء علامة خفيفة (lightweight tag)\ngit tag v1.0\n\n# إنشاء علامة موقعة (annotated tag) مع رسالة\ngit tag -a v1.1 -m "إصدار 1.1 مع إصلاحات أمنية"\n\n# عرض جميع العلامات\ngit tag\n\n# دفع العلامات إلى المستودع البعيد\ngit push origin v1.0\n# أو دفع جميع العلامات\ngit push --tags'
    },

    // ============================================================
    // HTML & CSS
    // ============================================================
    { 
        id: 88, 
        language: 'HTML/CSS', 
        shortcut: '! + Tab (Emmet)', 
        description: 'إنشاء هيكل HTML5 كامل', 
        category: 'Emmet',
        importance: 'يولد هيكل HTML5 كامل في ثانية واحدة، يوفر وقتاً كبيراً عند بدء أي صفحة جديدة.',
        fullDescription: 'عند كتابة ! ثم الضغط على Tab في محرر يدعم Emmet (مثل VS Code)، يتم إنشاء هيكل HTML5 كامل مع: doctype، html، head، meta tags، title، و body. يوفر وقتاً كبيراً في بدء أي مشروع.',
        example: 'اكتب: ! ثم Tab\n\nسيتولد:\n<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n    \n</body>\n</html>'
    },
    { 
        id: 89, 
        language: 'HTML/CSS', 
        shortcut: 'div>ul>li*3', 
        description: 'إنشاء قائمة متداخلة سريعة', 
        category: 'Emmet',
        importance: 'ينشئ هيكل قائمة كامل مع عناصر متعددة بسرعة، مفيد جداً لبناء قوائم التنقل أو المحتوى.',
        fullDescription: 'يستخدم Emmet لإنشاء هيكل HTML متداخل بسرعة. div>ul>li*3 تعني: div يحتوي على ul يحتوي على 3 عناصر li. يمكن تعديل الأرقام والنصوص بسهولة.',
        example: 'اكتب: div>ul>li*3 ثم Tab\n\nسيتولد:\n<div>\n    <ul>\n        <li></li>\n        <li></li>\n        <li></li>\n    </ul>\n</div>'
    },
    { 
        id: 90, 
        language: 'HTML/CSS', 
        shortcut: 'section#main', 
        description: 'عنصر section مع id="main"', 
        category: 'Emmet',
        importance: 'ينشئ عنصراً مع معرف (id) محدد بسرعة، مفيد لتحديد أقسام الصفحة الرئيسية.',
        fullDescription: 'ينشئ عنصر HTML مع معرف محدد. الصيغة: element#id. مفيد جداً لإنشاء أقسام الصفحة مع معرفات فريدة لتسهيل التعامل معها في CSS و JavaScript.',
        example: 'اكتب: section#main ثم Tab\n\nسيتولد:\n<section id="main"></section>\n\n# أمثلة أخرى:\nheader#header\nfooter#footer\narticle#post-123'
    },
    { 
        id: 91, 
        language: 'HTML/CSS', 
        shortcut: 'article.content', 
        description: 'عنصر article مع class="content"', 
        category: 'Emmet',
        importance: 'ينشئ عنصراً مع كلاس (class) محدد بسرعة، مفيد لتطبيق تنسيقات CSS.',
        fullDescription: 'ينشئ عنصر HTML مع كلاس محدد. الصيغة: element.class. مفيد جداً لإنشاء عناصر مع كلاسات جاهزة للتنسيق في CSS.',
        example: 'اكتب: article.content ثم Tab\n\nسيتولد:\n<article class="content"></article>\n\n# أمثلة أخرى:\ndiv.container\np.text-large\nspan.highlight'
    },
    { 
        id: 92, 
        language: 'HTML/CSS', 
        shortcut: 'a[href=""]', 
        description: 'إنشاء رابط', 
        category: 'Emmet',
        importance: 'ينشئ رابطاً مع خاصية href جاهزة للتعبئة، مفيد جداً لإنشاء روابط سريعة.',
        fullDescription: 'ينشئ عنصر a (رابط) مع خاصية href فارغة جاهزة لملء الرابط. يمكن أيضاً إضافة نصوص وخصائص أخرى.',
        example: 'اكتب: a[href="https://example.com"] ثم Tab\n\nسيتولد:\n<a href="https://example.com"></a>\n\n# مع نص:\na[href="#"]{الصفحة الرئيسية}\n# ينتج: <a href="#">الصفحة الرئيسية</a>'
    },
    { 
        id: 93, 
        language: 'HTML/CSS', 
        shortcut: 'img[src=""][alt=""]', 
        description: 'إنشاء صورة', 
        category: 'Emmet',
        importance: 'ينشئ عنصر صورة مع جميع الخصائص الأساسية جاهزة، مما يضمن صورة متكاملة منذ البداية.',
        fullDescription: 'ينشئ عنصر img مع خصائص src و alt فارغة جاهزة للتعبئة. alt مهم جداً لإمكانية الوصول (accessibility) ولمحركات البحث.',
        example: 'اكتب: img[src="image.jpg"][alt="وصف الصورة"] ثم Tab\n\nسيتولد:\n<img src="image.jpg" alt="وصف الصورة">'
    },
    { 
        id: 94, 
        language: 'HTML/CSS', 
        shortcut: 'form[action=""]', 
        description: 'إنشاء نموذج', 
        category: 'Emmet',
        importance: 'ينشئ نموذجاً مع خاصية action جاهزة، أساسي لأي صفحة تحتوي على مدخلات مستخدم.',
        fullDescription: 'ينشئ عنصر form مع خاصية action فارغة لتحديد مكان إرسال بيانات النموذج. يمكن إضافة method وخصائص أخرى.',
        example: 'اكتب: form[action="/submit"][method="POST"] ثم Tab\n\nسيتولد:\n<form action="/submit" method="POST"></form>'
    },
    { 
        id: 95, 
        language: 'HTML/CSS', 
        shortcut: 'input[type="text"]', 
        description: 'حقل إدخال نصي', 
        category: 'Emmet',
        importance: 'ينشئ حقول إدخال بسرعة مع تحديد النوع، أساسي لأي نموذج تفاعلي.',
        fullDescription: 'ينشئ عنصر input مع تحديد نوعه (text، email، password، إلخ). يمكن إضافة خصائص مثل placeholder، name، و required.',
        example: 'اكتب: input[type="text"][name="username"][placeholder="اسم المستخدم"]\n\nسيتولد:\n<input type="text" name="username" placeholder="اسم المستخدم">\n\n# أنواع أخرى:\ninput[type="email"]\ninput[type="password"]\ninput[type="number"]'
    },
    { 
        id: 96, 
        language: 'HTML/CSS', 
        shortcut: 'flex', 
        description: 'display: flex; (تخطيط مرن)', 
        category: 'CSS Layout',
        importance: 'أهم خاصية في CSS الحديثة، تسمح بإنشاء تخطيطات مرنة وسهلة الاستجابة.',
        fullDescription: 'تفعيل نموذج التخطيط المرن (Flexbox) الذي يسمح بترتيب العناصر بمرونة في صف أو عمود. يسهل التوسيط، توزيع المسافات، والتحكم في ترتيب العناصر بشكل كبير.',
        example: '.container {\n    display: flex;\n    justify-content: center; /* توسيط أفقي */\n    align-items: center;    /* توسيط عمودي */\n    gap: 1rem;             /* مسافة بين العناصر */\n}'
    },
    { 
        id: 97, 
        language: 'HTML/CSS', 
        shortcut: 'grid', 
        description: 'display: grid; (تخطيط شبكي)', 
        category: 'CSS Layout',
        importance: 'يسمح بإنشاء تخطيطات شبكية ثنائية الأبعاد مع تحكم دقيق في الأعمدة والصفوف.',
        fullDescription: 'تفعيل نموذج التخطيط الشبكي (Grid) الذي يسمح بإنشاء شبكات ثنائية الأبعاد. يتحكم في كل من الأعمدة والصفوف، مثالي لتصميم الصفحات المعقدة وعروض البطاقات.',
        example: '.grid-container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr); /* 3 أعمدة متساوية */\n    gap: 1.5rem;\n}\n\n/* تحكم في حجم العناصر */\n.item {\n    grid-column: span 2;\n}'
    },
    { 
        id: 98, 
        language: 'HTML/CSS', 
        shortcut: 'justify-content: center;', 
        description: 'توسيط أفقي في Flex', 
        category: 'CSS Layout',
        importance: 'يوسع العناصر أفقياً داخل الحاوية المرنة، أساسي لتوسيط المحتوى.',
        fullDescription: 'يحدد كيفية توزيع العناصر على المحور الأفقي في حاوية flex. القيم الشائعة: center (توسيط)، space-between (توزيع متساوٍ)، space-around (توزيع مع هوامش)، و flex-start/end.',
        example: '.container {\n    display: flex;\n    justify-content: center; /* توسيط الكل في المنتصف */\n    /* أو space-between لتوزيع العناصر */\n}'
    },
    { 
        id: 99, 
        language: 'HTML/CSS', 
        shortcut: 'align-items: center;', 
        description: 'توسيط عمودي في Flex', 
        category: 'CSS Layout',
        importance: 'يوسع العناصر عمودياً داخل الحاوية المرنة، أساسي لتوسيط المحتوى عمودياً.',
        fullDescription: 'يحدد كيفية محاذاة العناصر على المحور العمودي في حاوية flex. القيم الشائعة: center (توسيط)، stretch (تمديد)، flex-start/end، baseline.',
        example: '.container {\n    display: flex;\n    align-items: center; /* توسيط عمودي */\n    height: 100vh; /* يحتاج ارتفاع محدد */\n}'
    },
    { 
        id: 100, 
        language: 'HTML/CSS', 
        shortcut: 'gap: 1rem;', 
        description: 'مسافة بين العناصر', 
        category: 'CSS Layout',
        importance: 'تحدد مسافات متساوية بين العناصر في flex أو grid، أفضل من استخدام margin.',
        fullDescription: 'تحدد المسافة بين العناصر في حاويات flex و grid. تحل محل الحاجة لاستخدام margin على كل عنصر على حدة. تبسط الكود وتجعل التخطيط أنظف.',
        example: '.container {\n    display: flex;\n    gap: 1rem; /* مسافة 1rem بين كل عنصر */\n}\n\n.grid-container {\n    display: grid;\n    gap: 1.5rem; /* مسافة بين الصفوف والأعمدة */\n}\n\n/* مسافات مختلفة للصفوف والأعمدة */\ngap: 2rem 1rem; /* صفوف: 2rem، أعمدة: 1rem */'
    },
    { 
        id: 101, 
        language: 'HTML/CSS', 
        shortcut: 'margin: 0 auto;', 
        description: 'توسيط العنصر أفقياً', 
        category: 'CSS Box Model',
        importance: 'الطريقة الكلاسيكية لتوسيط العناصر ذات العرض المحدد، ضرورية لتوسيط الحاويات.',
        fullDescription: 'يوسع العنصر أفقياً داخل العنصر الأب. margin: 0 auto تعني 0 أعلى وأسفل، auto يسار ويمين. يعمل فقط مع العناصر ذات العرض المحدد (width).',
        example: '.container {\n    width: 80%;\n    max-width: 1200px;\n    margin: 0 auto; /* توسيط أفقي */\n}'
    },
    { 
        id: 102, 
        language: 'HTML/CSS', 
        shortcut: 'padding: 1rem;', 
        description: 'حشوة داخلية', 
        category: 'CSS Box Model',
        importance: 'تخلق مساحة داخلية حول المحتوى، ضرورية لجعل التصميم مريحاً وقابلاً للقراءة.',
        fullDescription: 'تحدد المسافة بين محتوى العنصر وحدوده الداخلية. تزيد من قابلية القراءة وتجعل التصميم أكثر راحة. يمكن تحديد قيم مختلفة لكل اتجاه.',
        example: '.card {\n    padding: 1.5rem; /* نفس الحشوة في جميع الاتجاهات */\n}\n\n/* قيم مختلفة */\npadding: 1rem 2rem; /* أعلى/أسفل 1rem، يمين/يسار 2rem */\npadding: 1rem 2rem 1.5rem; /* أعلى، يمين/يسار، أسفل */'
    },
    { 
        id: 103, 
        language: 'HTML/CSS', 
        shortcut: 'border-radius: 8px;', 
        description: 'زوايا دائرية', 
        category: 'CSS Visual',
        importance: 'تجعل الزوايا مستديرة، مما يعطي مظهراً حديثاً وجذاباً للعناصر.',
        fullDescription: 'تجعل زوايا العناصر مستديرة. تتحكم في نصف قطر انحناء الزوايا. يمكن تطبيقها على جميع العناصر (بطاقات، أزرار، صور، إلخ) لإضفاء مظهر عصري.',
        example: '.card {\n    border-radius: 12px;\n}\n\n.btn {\n    border-radius: 30px; /* أزرار دائرية */\n}\n\n/* زوايا مختلفة */\nborder-radius: 10px 20px 10px 20px;\n/* أو صيغة مختصرة */\nborder-radius: 50%; /* دائرة كاملة */'
    },
    { 
        id: 104, 
        language: 'HTML/CSS', 
        shortcut: 'box-shadow: 0 4px 12px rgba(0,0,0,0.1);', 
        description: 'ظل ناعم', 
        category: 'CSS Visual',
        importance: 'يضيف عمقاً للعناصر، مما يجعل التصميم يبدو ثلاثي الأبعاد واحترافياً.',
        fullDescription: 'يضيف ظلاً خلف العنصر. المعاملات: (الإزاحة الأفقية، الإزاحة العمودية، درجة التمويه، لون الظل). يساعد في إبراز العناصر وجعلها تبدو وكأنها ترتفع عن الصفحة.',
        example: '.card {\n    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);\n    /* إزاحة: 0 أفقي، 4 عمودي، تمويه 15px، لون أسود شفاف */\n}\n\n/* ظل داخلي */\nbox-shadow: inset 0 2px 4px rgba(0,0,0,0.05);\n\n/* ظل متعدد */\nbox-shadow: 0 4px 15px rgba(0,0,0,0.1), 0 8px 30px rgba(0,0,0,0.05);'
    },
    { 
        id: 105, 
        language: 'HTML/CSS', 
        shortcut: 'transition: all 0.3s ease;', 
        description: 'تأثير انتقالي سلس', 
        category: 'CSS Animation',
        importance: 'يجعل التفاعلات سلسة وجذابة، مما يحسن تجربة المستخدم بشكل كبير.',
        fullDescription: 'يضيف تأثيراً انتقالياً سلساً عند تغيير خصائص CSS. all يعني جميع الخصائص القابلة للانتقال، 0.3s المدة، ease دالة التوقيت. يجعل التغييرات تبدو طبيعية وليست مفاجئة.',
        example: '.btn {\n    background: blue;\n    transition: all 0.3s ease;\n}\n\n.btn:hover {\n    background: darkblue;\n    transform: scale(1.05);\n}\n\n/* انتقال خاصية محددة */\ntransition: background 0.3s ease, transform 0.2s ease;'
    },
    { 
        id: 106, 
        language: 'HTML/CSS', 
        shortcut: '@media (max-width: 768px) {}', 
        description: 'استعلام وسائط للجوال', 
        category: 'CSS Responsive',
        importance: 'يجعل التصميم متجاوباً مع جميع أحجام الشاشات، أساسي للويب الحديث.',
        fullDescription: 'يسمح بتطبيق قواعد CSS مختلفة بناءً على حجم الشاشة أو نوع الجهاز. مهم جداً لضمان ظهور الموقع بشكل جيد على الجوالات والأجهزة اللوحية.',
        example: '/* تصميم للحواسيب */\n.container {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n}\n\n/* تصميم للجوالات */\n@media (max-width: 768px) {\n    .container {\n        grid-template-columns: 1fr;\n        padding: 1rem;\n    }\n}\n\n/* للشاشات الصغيرة جداً */\n@media (max-width: 480px) {\n    body {\n        font-size: 14px;\n    }\n}'
    },
    { 
        id: 107, 
        language: 'HTML/CSS', 
        shortcut: ':hover', 
        description: 'تأثير عند تمرير الماوس', 
        category: 'CSS Pseudo',
        importance: 'يضيف تفاعلاً فورياً مع المستخدم، مما يجعل الواجهة حية وسهلة الاستخدام.',
        fullDescription: 'يُطبق القواعد عند تمرير الماوس فوق العنصر. يستخدم لإضافة تأثيرات بصرية على الأزرار، الروابط، البطاقات، وأي عنصر تفاعلي. يحسن تجربة المستخدم بشكل كبير.',
        example: '.btn {\n    background: #0a192f;\n    color: white;\n    transition: all 0.3s ease;\n}\n\n.btn:hover {\n    background: #64ffda;\n    color: #0a192f;\n    transform: translateY(-3px);\n    box-shadow: 0 6px 20px rgba(100, 255, 218, 0.3);\n}'
    },
    { 
        id: 108, 
        language: 'HTML/CSS', 
        shortcut: ':nth-child()', 
        description: 'اختيار عناصر حسب ترتيبها', 
        category: 'CSS Pseudo',
        importance: 'يسمح بتحديد عناصر محددة بناءً على موقعها في القائمة، مفيد جداً لتنسيق العناصر المتكررة.',
        fullDescription: 'يحدد عناصر بناءً على ترتيبها بين أشقائها. يدعم صيغاً مثل odd/even (فردي/زوجي)، أو معادلات مثل 2n+1. مفيد جداً لتنسيق القوائم، الجداول، أو البطاقات.',
        example: '/* تنسيق العناصر الفردية */\nli:nth-child(odd) {\n    background: #f0f4f8;\n}\n\n/* تنسيق أول 3 عناصر */\nli:nth-child(-n+3) {\n    font-weight: bold;\n}\n\n/* كل 3 عناصر */\n.item:nth-child(3n+1) {\n    margin-right: 0;\n}'
    },
    { 
        id: 109, 
        language: 'HTML/CSS', 
        shortcut: 'var(--primary-color)', 
        description: 'استخدام متغير CSS', 
        category: 'CSS Variables',
        importance: 'يسهل إدارة الألوان والقيم المتكررة في التصميم، مما يجعل التعديلات سريعة وسهلة.',
        fullDescription: 'يسمح بتخزين قيم قابلة لإعادة الاستخدام (مثل الألوان، الأحجام، والخطوط) في متغيرات CSS. يجعل الكود أكثر تنظيماً وسهولة في الصيانة. يمكن تغيير قيمة المتغير في مكان واحد وينتشر التغيير في كل مكان.',
        example: ':root {\n    --primary-color: #0a192f;\n    --secondary-color: #64ffda;\n    --font-size-large: 2rem;\n    --spacing: 1.5rem;\n}\n\n.title {\n    color: var(--primary-color);\n    font-size: var(--font-size-large);\n    margin: var(--spacing);\n}\n\n.btn {\n    background: var(--secondary-color);\n    padding: var(--spacing);\n}'
    },

    // ============================================================
    // VS CODE
    // ============================================================
    { 
        id: 110, 
        language: 'VS Code', 
        shortcut: 'Ctrl + P', 
        description: 'فتح ملف بسرعة', 
        category: 'Navigation',
        importance: 'يتيح فتح أي ملف في المشروع بسرعة، يوفر وقتاً كبيراً عن البحث في المستكشف.',
        fullDescription: 'يفتح نافذة بحث سريع للتنقل بين الملفات. اكتب اسم الملف أو جزءاً منه وستظهر نتائج سريعة. يدعم اختصارات مثل @ للذهاب للرموز (functions/classes) و : للذهاب لسطر معين.',
        example: 'Ctrl + P\nثم اكتب اسم الملف\nمثال: "inde" → index.html\n\n# اختصارات متقدمة:\nCtrl + P ثم @: الذهاب إلى دوال/كلاسات\nCtrl + P ثم :: الذهاب إلى سطر معين'
    },
    { 
        id: 111, 
        language: 'VS Code', 
        shortcut: 'Ctrl + Shift + P', 
        description: 'فتح لوحة الأوامر', 
        category: 'Navigation',
        importance: 'الطريقة الأساسية للوصول إلى جميع أوامر VS Code، من تثبيت الإضافات إلى تغيير الإعدادات.',
        fullDescription: 'تفتح لوحة الأوامر (Command Palette) التي تتيح الوصول إلى جميع أوامر VS Code. اكتب أي أمر للبحث عنه أو تنفيذه. هي نقطة الدخول لكل ما يمكنك فعله في VS Code.',
        example: 'Ctrl + Shift + P\nثم اكتب:\n- "Git: Commit" لعمل commit\n- "Extensions: Install" لتثبيت إضافة\n- "Terminal: Create New Terminal" لفتح طرفية\n- "Preferences: Open Settings" لفتح الإعدادات'
    },
    { 
        id: 112, 
        language: 'VS Code', 
        shortcut: 'Ctrl + ,', 
        description: 'فتح الإعدادات', 
        category: 'Settings',
        importance: 'يسمح بتخصيص VS Code بسرعة، من تغيير الخط إلى تعديل إعدادات اللغة.',
        fullDescription: 'يفتح نافذة الإعدادات (Settings) حيث يمكنك تخصيص VS Code. يمكن البحث عن أي إعداد وتغييره. يدعم وضع JSON لتعديل الإعدادات بشكل متقدم.',
        example: 'Ctrl + ,\nثم ابحث عن:\n- "font size" لتغيير حجم الخط\n- "tab size" لتغيير حجم التبويب\n- "theme" لتغيير المظهر\n- "format on save" للتهيئة التلقائية عند الحفظ'
    },
    { 
        id: 113, 
        language: 'VS Code', 
        shortcut: 'Ctrl + B', 
        description: 'إظهار/إخفاء الشريط الجانبي', 
        category: 'UI',
        importance: 'يتحكم في رؤية الشريط الجانبي لمنح مساحة أكبر للكود أو للوصول السريع للملفات.',
        fullDescription: 'يُظهر أو يُخفي الشريط الجانبي (Sidebar) الذي يحتوي على مستكشف الملفات، البحث، التحكم في الإصدارات، والإضافات. مفيد لتوفير مساحة للشاشات الصغيرة.',
        example: 'Ctrl + B\n# عند الضغط مرة يظهر، ومرة يخفي الشريط الجانبي\n\n# بديل: View → Appearance → Show Sidebar'
    },
    { 
        id: 114, 
        language: 'VS Code', 
        shortcut: 'Ctrl + Shift + E', 
        description: 'فتح مستكشف الملفات', 
        category: 'Navigation',
        importance: 'ينتقل إلى مستكشف الملفات في الشريط الجانبي، أساسي للتنقل بين ملفات المشروع.',
        fullDescription: 'ينتقل إلى علامة التبويب Explorer في الشريط الجانبي لعرض جميع ملفات ومجلدات المشروع. يسمح بإنشاء، حذف، وإعادة تسمية الملفات والمجلدات.',
        example: 'Ctrl + Shift + E\n# ينتقل إلى مستكشف الملفات\n# يمكنك الآن:\n- النقر على ملف لفتحه\n- إنشاء مجلد جديد\n- إعادة تسمية ملف'
    },
    { 
        id: 115, 
        language: 'VS Code', 
        shortcut: 'Ctrl + Shift + F', 
        description: 'بحث في جميع الملفات', 
        category: 'Search',
        importance: 'يسمح بالبحث عن نصوص عبر جميع ملفات المشروع، أساسي للبحث عن دوال أو نصوص معينة.',
        fullDescription: 'يفتح نافذة البحث عن النصوص في جميع ملفات المشروع. يمكن تحديد مجلدات معينة، استخدام تعبيرات منتظمة (regex)، واستبدال النصوص عبر جميع الملفات دفعة واحدة.',
        example: 'Ctrl + Shift + F\nثم اكتب النص المطلوب\nمثال: "function calculate"\n\n# خيارات متقدمة:\n- استخدم * للبحث عن ملفات معينة\n- استخدم تعبيرات منتظمة (regex)\n- يمكن استبدال النص في جميع الملفات'
    },
    { 
        id: 116, 
        language: 'VS Code', 
        shortcut: 'Ctrl + F', 
        description: 'بحث في الملف الحالي', 
        category: 'Search',
        importance: 'أسرع طريقة للبحث عن نص داخل الملف المفتوح حالياً.',
        fullDescription: 'يفتح نافذة بحث صغيرة داخل الملف المفتوح حالياً. يسمح بالبحث عن نصوص، استخدام تعبيرات منتظمة، البحث بحساسية لحالة الأحرف، والبحث عن الكلمات الكاملة.',
        example: 'Ctrl + F\nثم اكتب النص المطلوب\n\n# خيارات:\n- Alt + C: تفعيل حساسية حالة الأحرف\n- Alt + R: تفعيل التعبيرات المنتظمة\n- Alt + W: البحث عن كلمات كاملة فقط\n- Enter: البحث التالي\n- Shift + Enter: البحث السابق'
    },
    { 
        id: 117, 
        language: 'VS Code', 
        shortcut: 'Ctrl + H', 
        description: 'استبدال في الملف الحالي', 
        category: 'Search',
        importance: 'يسمح باستبدال النصوص بسرعة داخل الملف، مفيد جداً لإعادة تسمية أو تعديل كود.',
        fullDescription: 'يفتح نافذة البحث والاستبدال في الملف الحالي. يمكن استبدال نص بنص آخر، مع خيارات مثل استبدال الكل (Replace All) واستبدال واحداً تلو الآخر.',
        example: 'Ctrl + H\nثم:\n- اكتب النص المطلوب البحث عنه\n- اكتب النص البديل\n\n# خيارات:\n- استبدال الكل: استبدال جميع التطابقات دفعة واحدة\n- استبدال واحد: استبدال التطابق الحالي\n- Alt + Enter: تحديد جميع التطابقات'
    },
    { 
        id: 118, 
        language: 'VS Code', 
        shortcut: 'Alt + ↑/↓', 
        description: 'نقل السطر لأعلى/لأسفل', 
        category: 'Editing',
        importance: 'يسمح بنقل الأسطر بسرعة دون الحاجة للقص واللصق، مما يسرع إعادة تنظيم الكود.',
        fullDescription: 'ينقل السطر الحالي (أو الأسطر المحددة) لأعلى أو لأسفل دون تغيير محتواها. مفيد جداً لإعادة ترتيب الكود، تغيير ترتيب العناصر، أو تنظيم الكود.',
        example: '# انقل هذا السطر\nconsole.log("مرحباً");\n\n# حدد عدة أسطر وأنقلها دفعة واحدة\nfunction test() {\n    console.log("سطر 1");\n    console.log("سطر 2"); // انقل هذا\n    console.log("سطر 3");\n}'
    },
    { 
        id: 119, 
        language: 'VS Code', 
        shortcut: 'Ctrl + /', 
        description: 'تعليق/إلغاء تعليق السطر', 
        category: 'Editing',
        importance: 'أسرع طريقة لتعليق أو إلغاء تعليق الأسطر، أساسي لتجربة كود أو تعطيله مؤقتاً.',
        fullDescription: 'يعلق السطر الحالي أو يلغي تعليقه (toggle). في لغات البرمجة المختلفة يستخدم التعليق المناسب (// في JavaScript، # في Python، <!-- في HTML). مفيد جداً لتجربة كود أو تعطيل أجزاء منه مؤقتاً.',
        example: '// console.log("هذا معلق");\nconsole.log("هذا يعمل");\n\n# في Python\n# print("معلق")\nprint("يعمل")\n\n# تحديد عدة أسطر وتعليقها دفعة واحدة\n/*\nconsole.log("سطر 1");\nconsole.log("سطر 2");\nconsole.log("سطر 3");\n*/'
    },
    { 
        id: 120, 
        language: 'VS Code', 
        shortcut: 'Shift + Alt + A', 
        description: 'تعليق كتلة (Block Comment)', 
        category: 'Editing',
        importance: 'يعلق كتلة كاملة من الكود بسهولة، مفيد لتعطيل أجزاء كبيرة من الكود مؤقتاً.',
        fullDescription: 'يعلق كتلة من الكود باستخدام تعليق متعدد الأسطر. في JavaScript يستخدم /* */، وفي HTML يستخدم <!-- -->، وفي Python يستخدم """ """.',
        example: '/*\nconsole.log("سطر 1");\nconsole.log("سطر 2");\nconsole.log("سطر 3");\n*/\n\n# في HTML\n<!--\n<div>هذا معلق</div>\n<p>وكذا</p>\n-->'
    },
    { 
        id: 121, 
        language: 'VS Code', 
        shortcut: 'Ctrl + D', 
        description: 'تحديد الكلمة التالية المطابقة', 
        category: 'Editing',
        importance: 'يسمح بتحديد عدة كلمات متطابقة لتعديلها دفعة واحدة، يوفر وقتاً كبيراً في التحرير.',
        fullDescription: 'يحدد الكلمة التي عليها المؤشر، ثم عند الضغط مرة أخرى يحدد التطابق التالي. يمكن الاستمرار لتحديد عدة تطابقات وتحريرها جميعاً في نفس الوقت. مفيد جداً لإعادة تسمية المتغيرات أو تعديل نصوص متكررة.',
        example: 'const name = "أحمد";\nconsole.log(name);\nconsole.log(name); // ضع المؤشر على name واضغط Ctrl + D مرتين\n// سيتم تحديد كل name لتعديلها دفعة واحدة'
    },
    { 
        id: 122, 
        language: 'VS Code', 
        shortcut: 'Ctrl + Shift + L', 
        description: 'تحديد جميع الكلمات المطابقة', 
        category: 'Editing',
        importance: 'يحدد جميع تطابقات الكلمة في الملف دفعة واحدة، مفيد جداً للتعديل الشامل.',
        fullDescription: 'يحدد جميع الكلمات المطابقة للكلمة التي عليها المؤشر في الملف كله. يمكن تعديلها جميعاً في نفس الوقت. مفيد جداً لتغيير اسم متغير أو دالة في كل مكان في الملف.',
        example: 'const userName = "أحمد";\nconsole.log(userName);\nfunction greet(userName) {\n    return `مرحباً ${userName}`;\n}\n// ضع المؤشر على userName واضغط Ctrl + Shift + L\n// سيتم تحديد جميع userName لتعديلها'
    },
    { 
        id: 123, 
        language: 'VS Code', 
        shortcut: 'Ctrl + Space', 
        description: 'إظهار الاقتراحات (IntelliSense)', 
        category: 'Editing',
        importance: 'يفتح قائمة الاقتراحات التلقائية للمساعدة في كتابة الكود بشكل أسرع وأقل أخطاء.',
        fullDescription: 'يظهر قائمة بالاقتراحات للكود بناءً على السياق الحالي. يعرض الدوال المتاحة، المتغيرات، الكلاسات، وأكثر. يساعد في كتابة كود صحيح وأقل عرضة للأخطاء. يمكن التنقل بين الاقتراحات واختيار المناسب.',
        example: '// اكتب جزءاً من الكود ثم اضغط Ctrl + Space\nconst myArray = [1, 2, 3];\nmyArray. // اضغط Ctrl + Space\n// سترى جميع دوال المصفوفة المتاحة: map, filter, reduce, forEach, إلخ'
    },
    { 
        id: 124, 
        language: 'VS Code', 
        shortcut: 'Ctrl + .', 
        description: 'إظهار الإصلاحات السريعة', 
        category: 'Editing',
        importance: 'يقدم حلولاً سريعة للأخطاء أو التحسينات المقترحة في الكود، يساعد في تحسين جودة الكود.',
        fullDescription: 'يعرض قائمة بالإصلاحات السريعة (Quick Fixes) للخطأ الحالي أو التلميحات (Code Actions). يمكن أن يقترح إضافة import مفقود، تصحيح خطأ نحوي، تحسين الكود، أو إعادة هيكلته.',
        example: '// إذا كان هناك خطأ:\nconst x = y; // y غير معرف\n// ضع المؤشر واضغط Ctrl + .\n// سيقترح إضافة تعريف لـ y\n\n// أو تحسين الكود:\n// ضع المؤشر على دالة طويلة واضغط Ctrl + .\n// سيقترح استخراجها كدالة جديدة'
    },
    { 
        id: 125, 
        language: 'VS Code', 
        shortcut: 'F2', 
        description: 'إعادة تسمية المتغير/الدالة', 
        category: 'Editing',
        importance: 'يعيد تسمية المتغيرات أو الدوال في كل مكان في المشروع، مما يوفر وقتاً كبيراً ويضمن التناسق.',
        fullDescription: 'يعيد تسمية الرمز (المتغير، الدالة، الكلاس، إلخ) في كل مكان في الملف أو المشروع بأكمله. يغير كل المراجع تلقائياً، مما يضمن تناسق الكود. أفضل بكثير من البحث والاستبدال اليدوي.',
        example: '// ضع المؤشر على اسم المتغير واضغط F2\nconst userName = "أحمد";\nconsole.log(userName);\n// اكتب الاسم الجديد "fullName"\n// سيتم تحديث كل المراجع تلقائياً'
    },
    { 
        id: 126, 
        language: 'VS Code', 
        shortcut: 'Ctrl + Shift + M', 
        description: 'فتح مشاكل الملف (Errors)', 
        category: 'Debug',
        importance: 'يعرض جميع الأخطاء والتحذيرات في الملف في مكان واحد، مما يسهل إصلاحها.',
        fullDescription: 'يفتح لوحة المشاكل (Problems) التي تعرض جميع الأخطاء (Errors)، التحذيرات (Warnings)، والملاحظات (Info) في الملفات المفتوحة. يمكن النقر على أي مشكلة للانتقال إلى موقعها في الكود.',
        example: 'Ctrl + Shift + M\n# سترى قائمة بجميع المشاكل:\n- أخطاء نحوية\n- متغيرات غير مستخدمة\n- دوال مهجورة\n- تحذيرات من الإضافات\n\n# يمكنك النقر على مشكلة للانتقال إليها في الكود'
    },
    { 
        id: 127, 
        language: 'VS Code', 
        shortcut: 'Ctrl + `', 
        description: 'فتح الطرفية (Terminal)', 
        category: 'Terminal',
        importance: 'يفتح الطرفية المدمجة في VS Code، مما يسمح بتشغيل الأوامر دون مغادرة المحرر.',
        fullDescription: 'يفتح أو يغلق الطرفية المدمجة (Integrated Terminal) في VS Code. يمكن تشغيل أوامر Git، تشغيل سكربتات، تثبيت حزم، وأي شيء تفعله في الطرفية العادية. يدعم عدة علامات تبويب للطرفية.',
        example: 'Ctrl + `\n# سيفتح الطرفية في أسفل الشاشة\n\n# الآن يمكنك:\ngit status\nnpm install\npython script.py\nls -la\n\n# يمكن فتح طرفية جديدة\n# أو اختيار نوع الطرفية (PowerShell, Bash, CMD)'
    },
    { 
        id: 128, 
        language: 'VS Code', 
        shortcut: 'Ctrl + W', 
        description: 'إغلاق التبويب الحالي', 
        category: 'Tabs',
        importance: 'يغلق التبويب الحالي بسرعة، مفيد جداً لتنظيم مساحة العمل.',
        fullDescription: 'يغلق علامة التبويب (Tab) المفتوحة حالياً. إذا كان هناك تغييرات غير محفوظة، سيطلب منك الحفظ. يمكن استخدام Ctrl + Shift + T لاستعادة آخر تبويب مغلق.',
        example: 'Ctrl + W\n# يغلق التبويب الحالي\n\n# إذا كان هناك تغييرات غير محفوظة\n# سيظهر مربع حوار لحفظ التغييرات'
    },
    { 
        id: 129, 
        language: 'VS Code', 
        shortcut: 'Ctrl + Shift + T', 
        description: 'استعادة آخر تبويب مغلق', 
        category: 'Tabs',
        importance: 'يعيد فتح آخر تبويب أغلقته بالخطأ، مما يوفر الوقت ويعيد العمل المفقود.',
        fullDescription: 'يعيد فتح آخر علامة تبويب تم إغلاقها. يمكن الضغط عدة مرات لاستعادة عدة تبويبات مغلقة بالتسلسل العكسي. مفيد جداً عندما تغلق تبويباً بالخطأ.',
        example: 'Ctrl + Shift + T\n# يعيد فتح آخر تبويب مغلق\n\n# اضغط مرة أخرى لاستعادة الذي قبله\n# يستمر في استعادة التبويبات المحفوظة في الجلسة'
    },
    { 
        id: 130, 
        language: 'VS Code', 
        shortcut: 'Ctrl + K + Z', 
        description: 'وضع Zen (تركيز)', 
        category: 'UI',
        importance: 'يدخل في وضع التركيز الكامل بإخفاء جميع العناصر غير الضرورية، مما يساعد على التركيز على الكود.',
        fullDescription: 'يدخل في وضع Zen Mode الذي يخفي جميع العناصر غير الضرورية مثل الشريط الجانبي، شريط الحالة، وعلامات التبويب، تاركاً فقط محرر الكود. مثالي للتركيز الكامل على الكتابة دون تشتيت.',
        example: 'Ctrl + K ثم Z\n# يدخل وضع Zen Mode\n# للخروج: اضغط Esc مرتين\n\n# في هذا الوضع:\n- تختفي جميع الأشرطة الجانبية\n- يظهر فقط محرر الكود\n- يمكنك التركيز على الكتابة دون تشتيت'
    }
];

// ============================================================
// دوال العرض والتفاعل
// ============================================================

// عرض جميع الاختصارات مع إمكانية البحث والفلترة
function renderCheatsheets(filterText = '', filterLanguage = 'all') {
    const container = document.getElementById('cheatsheetGrid');
    if (!container) return;

    let filteredData = cheatsheetsData;

    // فلترة حسب النص
    if (filterText.trim() !== '') {
        const searchText = filterText.toLowerCase().trim();
        filteredData = filteredData.filter(item =>
            item.shortcut.toLowerCase().includes(searchText) ||
            item.description.toLowerCase().includes(searchText) ||
            item.language.toLowerCase().includes(searchText) ||
            item.category.toLowerCase().includes(searchText)
        );
    }

    // فلترة حسب اللغة
    if (filterLanguage !== 'all') {
        filteredData = filteredData.filter(item => item.language === filterLanguage);
    }

    if (filteredData.length === 0) {
        container.innerHTML = `<div class="no-results">🔍 لا توجد اختصارات تطابق بحثك</div>`;
        return;
    }

    container.innerHTML = filteredData.map(item => `
        <div class="card" data-id="${item.id}">
            <span class="lang-tag">${item.language}</span>
            <h3>${item.shortcut}</h3>
            <p>${item.description}</p>
            <div class="card-footer">
                <span class="category">📂 ${item.category}</span>
                <button class="btn-detail" onclick="viewDetail(${item.id})">عرض التفاصيل</button>
            </div>
        </div>
    `).join('');
}

// عرض تفاصيل الاختصار مع الوصف الكامل
function renderDetailPage() {
    const container = document.getElementById('detailContent');
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id')) || 1;

    const item = cheatsheetsData.find(c => c.id === id);
    if (!item) {
        container.innerHTML = `<p style="color:red;">⚠️ لم يتم العثور على الاختصار المطلوب.</p>`;
        return;
    }

    container.innerHTML = `
        <span class="lang-badge">${item.language}</span>
        <h2>${item.shortcut}</h2>
        <div class="detail-tags">
            <span>📂 ${item.category}</span>
            <span>🆔 #${item.id}</span>
        </div>
        <p style="font-size:1.1rem;margin:1rem 0;">${item.description}</p>
        
        <div class="detail-example">
            <strong>⭐ لماذا هذا الاختصار مهم؟</strong>
            <p style="margin-top:0.5rem;color:#4a5568;">${item.importance}</p>
        </div>
        
        <div class="detail-example">
            <strong>📖 شرح مفصل:</strong>
            <p style="margin-top:0.5rem;color:#4a5568;">${item.fullDescription}</p>
        </div>
        
        <div class="code-block">
            <code>${item.example}</code>
        </div>
        
        <a href="cheatsheets.html" class="back-link">← العودة إلى قائمة الاختصارات</a>
    `;
}

// دالة عرض التفاصيل
function viewDetail(id) {
    window.location.href = `detail.html?id=${id}`;
}

// دالة معاينة الصفحة الرئيسية
function renderPreviewCards() {
    const container = document.getElementById('previewCards');
    if (!container) return;

    const previewData = cheatsheetsData.slice(0, 6);
    container.innerHTML = previewData.map(item => `
        <div class="preview-item">
            <div class="lang">${item.language}</div>
            <div class="shortcut">${item.shortcut}</div>
            <div class="desc">${item.description}</div>
        </div>
    `).join('');
}

// دالة معالجة البحث والفلترة
function setupSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const filterSelect = document.getElementById('filterSelect');

    if (!searchInput || !filterSelect) return;

    function updateResults() {
        renderCheatsheets(searchInput.value, filterSelect.value);
    }

    searchInput.addEventListener('input', updateResults);
    filterSelect.addEventListener('change', updateResults);
}

// دوال النماذج
function showAlert(message, type = 'info') {
    alert(`📢 ${message}`);
}

function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !phone || !message) {
        showAlert('الرجاء ملء جميع الحقول قبل الإرسال.', 'warning');
        return;
    }

    showAlert(`✅ شكراً ${name}، تم استلام رسالتك بنجاح! سنتواصل معك قريباً.`, 'success');
    document.getElementById('contactForm').reset();
}

function handleLoginForm(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();

    if (!email || !password) {
        showAlert('الرجاء إدخال البريد الإلكتروني وكلمة المرور.', 'warning');
        return;
    }

    if (email === 'user@example.com' && password === '123456') {
        showAlert('✅ تم تسجيل الدخول بنجاح! أهلاً بك في CheatSheet Hub.', 'success');
    } else {
        showAlert('❌ البريد الإلكتروني أو كلمة المرور غير صحيحة. (جرب: user@example.com / 123456)', 'error');
    }
}
// ============================================
// دوال إنشاء الحساب (Sign Up)
// ============================================

// إظهار/إخفاء كلمة المرور
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    const type = field.getAttribute('type') === 'password' ? 'text' : 'password';
    field.setAttribute('type', type);
    
    const button = field.parentElement.querySelector('.toggle-password');
    if (button) {
        button.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    }
}

// التحقق من قوة كلمة المرور
function checkPasswordStrength(password) {
    let score = 0;
    const requirements = {
        length: password.length >= 6,
        lower: /[a-z]/.test(password),
        upper: /[A-Z]/.test(password),
        number: /[0-9]/.test(password),
    };
    
    // تحديث المتطلبات
    document.getElementById('reqLength').textContent = 
        (requirements.length ? '✅' : '❌') + ' 6 أحرف على الأقل';
    document.getElementById('reqLength').className = requirements.length ? 'met' : '';
    
    document.getElementById('reqLower').textContent = 
        (requirements.lower ? '✅' : '❌') + ' حرف صغير (a-z)';
    document.getElementById('reqLower').className = requirements.lower ? 'met' : '';
    
    document.getElementById('reqUpper').textContent = 
        (requirements.upper ? '✅' : '❌') + ' حرف كبير (A-Z)';
    document.getElementById('reqUpper').className = requirements.upper ? 'met' : '';
    
    document.getElementById('reqNumber').textContent = 
        (requirements.number ? '✅' : '❌') + ' رقم (0-9)';
    document.getElementById('reqNumber').className = requirements.number ? 'met' : '';
    
    // حساب النقاط
    if (requirements.length) score++;
    if (requirements.lower) score++;
    if (requirements.upper) score++;
    if (requirements.number) score++;
    
    const bar = document.getElementById('strengthBar');
    const text = document.getElementById('strengthText');
    
    // تعيين الفئة
    bar.className = 'strength-bar';
    text.className = 'strength-text';
    
    if (password.length === 0) {
        bar.className = 'strength-bar';
        text.textContent = 'ضعف';
        text.className = 'strength-text';
        return;
    }
    
    if (score <= 1) {
        bar.classList.add('weak');
        text.textContent = 'ضعيف';
        text.classList.add('weak');
    } else if (score === 2) {
        bar.classList.add('medium');
        text.textContent = 'متوسط';
        text.classList.add('medium');
    } else if (score === 3) {
        bar.classList.add('strong');
        text.textContent = 'قوي';
        text.classList.add('strong');
    } else if (score === 4) {
        bar.classList.add('very-strong');
        text.textContent = 'قوي جداً';
        text.classList.add('very-strong');
    }
}

// عرض رسالة خطأ
function showFieldError(fieldId, message) {
    const errorEl = document.getElementById(fieldId + 'Error');
    if (!errorEl) return;
    
    if (message) {
        errorEl.textContent = message;
        errorEl.classList.add('show');
        const input = document.getElementById(fieldId);
        if (input) {
            input.classList.add('error');
            input.classList.remove('success');
        }
    } else {
        errorEl.classList.remove('show');
        const input = document.getElementById(fieldId);
        if (input) {
            input.classList.remove('error');
            input.classList.add('success');
        }
    }
}

// عرض الشروط والأحكام
function showTerms() {
    alert(`📜 الشروط والأحكام

1. استخدام المنصة بشكل قانوني وأخلاقي.
2. عدم مشاركة حسابك مع الآخرين.
3. جميع المحتويات التعليمية هي ملك للمنصة.
4. يمكنك استخدام الاختصارات في مشاريعك الشخصية والمهنية.
5. نحن نحترم خصوصيتك ولا نشارك بياناتك مع أطراف ثالثة.

للاستفسارات: support@cheatsheethub.com`);
}

// معالج نموذج إنشاء الحساب
function handleSignupForm(event) {
    event.preventDefault();
    
    // جمع البيانات
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const phone = document.getElementById('signupPhone').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const termsChecked = document.getElementById('termsCheckbox').checked;
    
    let isValid = true;
    
    // التحقق من الاسم
    if (fullName.length < 3) {
        showFieldError('fullName', 'الاسم يجب أن يكون 3 أحرف على الأقل');
        isValid = false;
    } else {
        showFieldError('fullName', '');
    }
    
    // التحقق من البريد الإلكتروني
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFieldError('signupEmail', 'الرجاء إدخال بريد إلكتروني صحيح');
        isValid = false;
    } else {
        showFieldError('signupEmail', '');
    }
    
    // التحقق من رقم الجوال
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        showFieldError('signupPhone', 'الرجاء إدخال 10 أرقام صحيحة');
        isValid = false;
    } else {
        showFieldError('signupPhone', '');
    }
    
    // التحقق من قوة كلمة المرور
    if (password.length < 6) {
        showFieldError('signupPassword', 'كلمة المرور ضعيفة جداً');
        isValid = false;
    } else {
        showFieldError('signupPassword', '');
    }
    
    // التحقق من تطابق كلمة المرور
    if (password !== confirmPassword) {
        showFieldError('confirmPassword', 'كلمة المرور غير متطابقة');
        isValid = false;
    } else {
        showFieldError('confirmPassword', '');
    }
    
    // التحقق من الموافقة على الشروط
    if (!termsChecked) {
        showFieldError('terms', 'يجب الموافقة على الشروط والأحكام');
        isValid = false;
    } else {
        showFieldError('terms', '');
    }
    
    if (!isValid) return;
    
    // محاكاة إنشاء الحساب
    const btn = document.getElementById('signupBtn');
    btn.classList.add('loading');
    btn.disabled = true;
    
    setTimeout(() => {
        btn.classList.remove('loading');
        btn.disabled = false;
        
        // تخزين بيانات المستخدم في localStorage (محاكاة)
        const userData = {
            name: fullName,
            email: email,
            phone: phone,
            registeredAt: new Date().toISOString()
        };
        localStorage.setItem('cheatsheet_user', JSON.stringify(userData));
        
        // عرض رسالة نجاح
        const form = document.getElementById('signupForm');
        form.innerHTML = `
            <div class="success-message">
                <span class="icon">🎉</span>
                <h3>تم إنشاء الحساب بنجاح!</h3>
                <p>مرحباً بك ${fullName} في عائلة CheatSheet Hub.<br />
                يمكنك الآن تسجيل الدخول والاستفادة من جميع الاختصارات.</p>
                <a href="login.html" class="btn btn-primary" style="display:inline-block;margin-top:1rem;">
                    اذهب لتسجيل الدخول
                </a>
            </div>
        `;
        
        showAlert(`✅ تم إنشاء حساب ${fullName} بنجاح!`, 'success');
    }, 1500);
}

// ---------- ربط نموذج إنشاء الحساب ----------
document.addEventListener('DOMContentLoaded', function() {
    // ... الكود الموجود ...
    
    // ربط نموذج إنشاء الحساب
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignupForm);
        
        // التحقق الفوري من قوة كلمة المرور
        const passwordField = document.getElementById('signupPassword');
        if (passwordField) {
            passwordField.addEventListener('input', function() {
                checkPasswordStrength(this.value);
            });
        }
        
        // التحقق الفوري من تطابق كلمة المرور
        const confirmField = document.getElementById('confirmPassword');
        const passField = document.getElementById('signupPassword');
        if (confirmField && passField) {
            confirmField.addEventListener('input', function() {
                if (this.value && this.value !== passField.value) {
                    showFieldError('confirmPassword', 'كلمة المرور غير متطابقة');
                } else {
                    showFieldError('confirmPassword', '');
                }
            });
        }
    }
});
// ---------- تشغيل التطبيق ----------
document.addEventListener('DOMContentLoaded', function() {
    // الصفحة الرئيسية
    renderPreviewCards();

    // صفحة الاختصارات (مع البحث والفلترة)
    const grid = document.getElementById('cheatsheetGrid');
    if (grid) {
        renderCheatsheets();
        setupSearchAndFilter();
    }

    // صفحة التفاصيل
    renderDetailPage();

    // نماذج التواصل
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // نموذج تسجيل الدخول
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLoginForm);
    }

    // تفعيل الروابط النشطة
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});
// ===== زر القائمة للجوال =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('open');
        // تغيير شكل الزر
        this.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
    
    // إغلاق القائمة عند النقر على أي رابط
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.textContent = '☰';
        });
    });
}