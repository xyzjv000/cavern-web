  import { redirect } from "next/navigation";

  export default function page() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // useEffect(() => {
    //   if (!isLoggedIn) {
    //     redirect('/login')
    //   }
    //   else {
    //     redirect('/home')
    //   }
    // }, []);

    return (
      <div className="relative flex flex-col place-items-center">
        <p>Hellow world</p>
      </div>
    );
  }
