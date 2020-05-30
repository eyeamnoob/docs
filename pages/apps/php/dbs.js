import Layout from "../../../components/Layout";
import Link from "next/link";
import Head from "next/head";
import Highlight from "react-highlight";
import Notice from "../../../components/Notice";

export default () => (
  <Layout>
    <Head>
      <title>PHP سرویس ابری لیارا | مستندات استقرار برنامه‌های</title>
    </Head>
    <h1>زبان PHP</h1>
    <span className="pageDescription">(PHP Language)</span>
    <h3>اتصال به دیتابیس‌ها</h3>
    <p>
      <ul>
        <li>
          <b>MySQL:</b>
        </li>
        روش‌ها و کتابخانه‌های مختلفی برای اتصال به MySQL در PHP وجود دارد. برای
        نمونه ما در پروژه تستی‌مان از کتابخانه‌{" "}
        <a href="https://github.com/catfan/Medoo" target="_blank">
          Medoo
        </a>{" "}
        برای اتصال به دیتابیس و اجرای کوئری‌ها استفاده کرده‌ایم. به همین خاطر
        ابتدا در بخش ENV ها اطلاعات ضروری را اضافه میکنیم:
        <Highlight className="config">
          {`DB_CONNECTION=mysql
DB_HOST=s11.liara.ir
DB_PORT=3306
DB_DATABASE=php-starter-db
DB_USERNAME=root
DB_PASSWORD=xxxxxxxxxxxx
`}
        </Highlight>
        حال کافیست در برنامه به این صورت اطلاعات را خوانده و به دیتابیس متصل
        شویم:
        <Highlight className="php">
          {`<?php
require 'vendor/autoload.php';
use Medoo\\Medoo;

$database = new Medoo([
        'database_type' => 'mysql',
        'server' => getenv('DB_HOST'),
        'port' => getenv('DB_PORT'),
        'database_name' => getenv('DB_DATABASE'),
        'username' => getenv('DB_USERNAME'),
        'password' => getenv('DB_PASSWORD'),
        'charset' => 'utf8'
]);`}{" "}
        </Highlight>
      </ul>
    </p>
    <Notice variant="warning">
      توجه داشته باشید که اطلاعات بالا همگی برای برنامه‌ی تست این آموزش میباشد.
      شما متناسب با اطلاعات دیتابیس برنامه‌ی‌تان باید مقادیر را جایگذاری کنید.
    </Notice>
    <br />

    <Link href="/apps/php/disks">متوجه شدم، برو بعدی!</Link>
  </Layout>
);
