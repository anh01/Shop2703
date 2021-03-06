PGDMP                         u            MYSHOP    9.6rc1    9.6rc1 5    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                       false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                       false            �           1262    147516    MYSHOP    DATABASE     �   CREATE DATABASE "MYSHOP" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "MYSHOP";
             postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
             postgres    false            �           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                  postgres    false    3                        3079    12387    plpgsql 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
    DROP EXTENSION plpgsql;
                  false            �           0    0    EXTENSION plpgsql    COMMENT     @   COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
                       false    1            �            1259    147532    Bill    TABLE     �   CREATE TABLE "Bill" (
    id integer NOT NULL,
    "idCustomer" integer,
    date date,
    total integer,
    status boolean
);
    DROP TABLE public."Bill";
       public         postgres    false    3            �            1259    147588 
   BillDetail    TABLE     |   CREATE TABLE "BillDetail" (
    id integer NOT NULL,
    "idBill" integer,
    "idProduct" integer,
    quantity integer
);
     DROP TABLE public."BillDetail";
       public         postgres    false    3            �            1259    147586    BillDetail_id_seq    SEQUENCE     u   CREATE SEQUENCE "BillDetail_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."BillDetail_id_seq";
       public       postgres    false    3    196            �           0    0    BillDetail_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE "BillDetail_id_seq" OWNED BY "BillDetail".id;
            public       postgres    false    195            �            1259    147530    Bill_id_seq    SEQUENCE     o   CREATE SEQUENCE "Bill_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."Bill_id_seq";
       public       postgres    false    188    3            �           0    0    Bill_id_seq    SEQUENCE OWNED BY     1   ALTER SEQUENCE "Bill_id_seq" OWNED BY "Bill".id;
            public       postgres    false    187            �            1259    147572    Image    TABLE     p   CREATE TABLE "Image" (
    id integer NOT NULL,
    filename text NOT NULL,
    "idProduct" integer NOT NULL
);
    DROP TABLE public."Image";
       public         postgres    false    3            �            1259    147570    Image_id_seq    SEQUENCE     p   CREATE SEQUENCE "Image_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Image_id_seq";
       public       postgres    false    194    3            �           0    0    Image_id_seq    SEQUENCE OWNED BY     3   ALTER SEQUENCE "Image_id_seq" OWNED BY "Image".id;
            public       postgres    false    193            �            1259    147556    Product    TABLE       CREATE TABLE "Product" (
    id integer NOT NULL,
    name text NOT NULL,
    price integer NOT NULL,
    color text NOT NULL,
    material text NOT NULL,
    description text NOT NULL,
    "inTop" boolean,
    "inCollection" boolean,
    "idType" integer
);
    DROP TABLE public."Product";
       public         postgres    false    3            �            1259    147545    ProductType    TABLE     i   CREATE TABLE "ProductType" (
    id integer NOT NULL,
    name text NOT NULL,
    image text NOT NULL
);
 !   DROP TABLE public."ProductType";
       public         postgres    false    3            �            1259    147543    ProductType_id_seq    SEQUENCE     v   CREATE SEQUENCE "ProductType_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public."ProductType_id_seq";
       public       postgres    false    3    190            �           0    0    ProductType_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE "ProductType_id_seq" OWNED BY "ProductType".id;
            public       postgres    false    189            �            1259    147554    Product_id_seq    SEQUENCE     r   CREATE SEQUENCE "Product_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public."Product_id_seq";
       public       postgres    false    3    192            �           0    0    Product_id_seq    SEQUENCE OWNED BY     7   ALTER SEQUENCE "Product_id_seq" OWNED BY "Product".id;
            public       postgres    false    191            �            1259    147519    User    TABLE     �   CREATE TABLE "User" (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    name text NOT NULL,
    phone text,
    address text
);
    DROP TABLE public."User";
       public         postgres    false    3            �            1259    147517    User_id_seq    SEQUENCE     o   CREATE SEQUENCE "User_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public."User_id_seq";
       public       postgres    false    3    186            �           0    0    User_id_seq    SEQUENCE OWNED BY     1   ALTER SEQUENCE "User_id_seq" OWNED BY "User".id;
            public       postgres    false    185            �           2604    147535    Bill id    DEFAULT     X   ALTER TABLE ONLY "Bill" ALTER COLUMN id SET DEFAULT nextval('"Bill_id_seq"'::regclass);
 8   ALTER TABLE public."Bill" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    188    187    188            �           2604    147591    BillDetail id    DEFAULT     d   ALTER TABLE ONLY "BillDetail" ALTER COLUMN id SET DEFAULT nextval('"BillDetail_id_seq"'::regclass);
 >   ALTER TABLE public."BillDetail" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    196    195    196            �           2604    147575    Image id    DEFAULT     Z   ALTER TABLE ONLY "Image" ALTER COLUMN id SET DEFAULT nextval('"Image_id_seq"'::regclass);
 9   ALTER TABLE public."Image" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    194    193    194            �           2604    147559 
   Product id    DEFAULT     ^   ALTER TABLE ONLY "Product" ALTER COLUMN id SET DEFAULT nextval('"Product_id_seq"'::regclass);
 ;   ALTER TABLE public."Product" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    192    191    192            �           2604    147548    ProductType id    DEFAULT     f   ALTER TABLE ONLY "ProductType" ALTER COLUMN id SET DEFAULT nextval('"ProductType_id_seq"'::regclass);
 ?   ALTER TABLE public."ProductType" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    189    190    190            �           2604    147522    User id    DEFAULT     X   ALTER TABLE ONLY "User" ALTER COLUMN id SET DEFAULT nextval('"User_id_seq"'::regclass);
 8   ALTER TABLE public."User" ALTER COLUMN id DROP DEFAULT;
       public       postgres    false    186    185    186            �          0    147532    Bill 
   TABLE DATA               @   COPY "Bill" (id, "idCustomer", date, total, status) FROM stdin;
    public       postgres    false    188   5       �          0    147588 
   BillDetail 
   TABLE DATA               D   COPY "BillDetail" (id, "idBill", "idProduct", quantity) FROM stdin;
    public       postgres    false    196   -5       �           0    0    BillDetail_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('"BillDetail_id_seq"', 1, false);
            public       postgres    false    195            �           0    0    Bill_id_seq    SEQUENCE SET     5   SELECT pg_catalog.setval('"Bill_id_seq"', 1, false);
            public       postgres    false    187            �          0    147572    Image 
   TABLE DATA               5   COPY "Image" (id, filename, "idProduct") FROM stdin;
    public       postgres    false    194   J5       �           0    0    Image_id_seq    SEQUENCE SET     7   SELECT pg_catalog.setval('"Image_id_seq"', 142, true);
            public       postgres    false    193            �          0    147556    Product 
   TABLE DATA               n   COPY "Product" (id, name, price, color, material, description, "inTop", "inCollection", "idType") FROM stdin;
    public       postgres    false    192   7       �          0    147545    ProductType 
   TABLE DATA               1   COPY "ProductType" (id, name, image) FROM stdin;
    public       postgres    false    190   �J       �           0    0    ProductType_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('"ProductType_id_seq"', 4, true);
            public       postgres    false    189            �           0    0    Product_id_seq    SEQUENCE SET     8   SELECT pg_catalog.setval('"Product_id_seq"', 52, true);
            public       postgres    false    191            �          0    147519    User 
   TABLE DATA               D   COPY "User" (id, email, password, name, phone, address) FROM stdin;
    public       postgres    false    186   &K       �           0    0    User_id_seq    SEQUENCE SET     5   SELECT pg_catalog.setval('"User_id_seq"', 1, false);
            public       postgres    false    185                       2606    147593    BillDetail BillDetail_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY "BillDetail"
    ADD CONSTRAINT "BillDetail_pkey" PRIMARY KEY (id);
 H   ALTER TABLE ONLY public."BillDetail" DROP CONSTRAINT "BillDetail_pkey";
       public         postgres    false    196    196            �           2606    147537    Bill Bill_pkey 
   CONSTRAINT     I   ALTER TABLE ONLY "Bill"
    ADD CONSTRAINT "Bill_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."Bill" DROP CONSTRAINT "Bill_pkey";
       public         postgres    false    188    188                       2606    147580    Image Image_pkey 
   CONSTRAINT     K   ALTER TABLE ONLY "Image"
    ADD CONSTRAINT "Image_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Image" DROP CONSTRAINT "Image_pkey";
       public         postgres    false    194    194                        2606    147553    ProductType ProductType_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY "ProductType"
    ADD CONSTRAINT "ProductType_pkey" PRIMARY KEY (id);
 J   ALTER TABLE ONLY public."ProductType" DROP CONSTRAINT "ProductType_pkey";
       public         postgres    false    190    190                       2606    147564    Product Product_pkey 
   CONSTRAINT     O   ALTER TABLE ONLY "Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Product" DROP CONSTRAINT "Product_pkey";
       public         postgres    false    192    192            �           2606    147527    User User_pkey 
   CONSTRAINT     I   ALTER TABLE ONLY "User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
 <   ALTER TABLE ONLY public."User" DROP CONSTRAINT "User_pkey";
       public         postgres    false    186    186            �           2606    147529    User un_email 
   CONSTRAINT     D   ALTER TABLE ONLY "User"
    ADD CONSTRAINT un_email UNIQUE (email);
 9   ALTER TABLE ONLY public."User" DROP CONSTRAINT un_email;
       public         postgres    false    186    186            	           2606    147601    Image fk_idProduct    FK CONSTRAINT     o   ALTER TABLE ONLY "Image"
    ADD CONSTRAINT "fk_idProduct" FOREIGN KEY ("idProduct") REFERENCES "Product"(id);
 @   ALTER TABLE ONLY public."Image" DROP CONSTRAINT "fk_idProduct";
       public       postgres    false    2050    194    192                       2606    147538    Bill fk_id_customer    FK CONSTRAINT     b   ALTER TABLE ONLY "Bill"
    ADD CONSTRAINT fk_id_customer FOREIGN KEY (id) REFERENCES "User"(id);
 ?   ALTER TABLE ONLY public."Bill" DROP CONSTRAINT fk_id_customer;
       public       postgres    false    186    2042    188                       2606    147595    Product fn_idType    FK CONSTRAINT     o   ALTER TABLE ONLY "Product"
    ADD CONSTRAINT "fn_idType" FOREIGN KEY ("idType") REFERENCES "ProductType"(id);
 ?   ALTER TABLE ONLY public."Product" DROP CONSTRAINT "fn_idType";
       public       postgres    false    190    192    2048            �      x������ � �      �      x������ � �      �   �  x�M�;�#1Eј\�Q��{�t�@G��h`���F<z�ˇ�?�����p<�P�7�C)���o�S�A�|�9�R�(J�Fp4��1�K��e�!�KP�JYoպӜN%oպ3�Ieo�~���Tqj�֋D��9%��(�R�)�^�ĸ��N���\I��z�L�����PoKr?�sJh����FNͶ4��ة�ٖ�N�8U4�w~���NͲ��<4sJ��¨�(RNrq�xi'�@�<����ܤ�id��F%À����*4`"WC&[�h�Į�M�m��I\�,�=h𤮆O��C�\�.�)>�����3Cçv5|�|�h�4��O�/��i]�n�R�t��϶{)|&W�g�>�R�,����}��Y]�����>������^������Ǳ���v5|�|��>�����s�e�y]�o�2�|��/�{9|!W�ۇ�����|��?�8K      �      x��ZێG�}.}E�O�@6���'�%Æw��� 0/ɪ$��beMeVS��w��9�uiJ���`6l���ʌ<qΉ��.6����n˸�eq}sW�io�h��O��<�/��{B��1���گ�����˹����eh~�&�����=��e��4����ظ�>^���ף��^����CS۾���U���L<"���?�Pn}_��?D�i��6&FۻvW6��ڜK|��7��՘����V���^����uL[�ikyn�u��6b?īb��_�\FoB,�q�{���e����1B����v�Le��ޚ���[F/o�F��66�l㛚��5��3pA߄��X����3�Y�0��9����`����a��*LM�YGgˮ�����и��^�n�x�*],��]@x�Ѝ|�G�[Xǡoq�`-������X���2׷��{w��-B�o��8��1THv�NLhbp;ߖa8�.�˜�9��: �~����ڃ��7��V����e��2�ݓ�*E�e� �e2�W�/���~�nl�6-�f��
B���<�/�m�=8��&:L��#����.z,@��+B4�tt���m�!��v�w�x��mt��	_Ɔz��Η��mԽl]�@�CY�Mdd�5�nז������5��>��2]'��S>b�yw�|�̀�!�� ��8�ǹ�syD|�ޮ,@Mcy������l���`���C��~���3��I�w�Mí���� �6�oḄL@#]�+$���+w�4������1eoc�񱳀`�C~�� �^�î���=��\T�Ž�o�Or��X.͒��G&�[�:�	g��s�W�dk���Ä3�{W!�;a��v���M�L�Ms�a'���aS
�u�
2+U�3�?y~��dߒ]�ͳ�qʭ�ໄU�&���a'n=_���M�O�~��4��l��O뀣�F�Wc�H�.�6��f8x����7ůƵa���#{�e�o���J6���*#��گm�g��y/s�=/�"4�i�ȶYWgZPZ��C4�J�+�C+���jh�4�4y�2{�FY�UH��+����AB�;�k�(�)j[y@�o��K6�aDK�S�pQ��k�s���zENCNU��ݑ۲��g�$��T �8������y�,%}ڂ���3-Y
�i�~��c(q��K].a����
����4��eA U~E�P^�<���o��^h$l�RNC�$�}Vj���Τ��[ߓ=���m6��ƚ!������Bvb�t���Nˀ.�u�`	ӖHB��wr�b"@��r�])�N�X�]KɬM7x{]@-���d[2�ȁ�V�������6���l]۫�CC��1��?�:�ykj�ms��B�fq�+��Cu��4 ��@[m���#�t�����)b�G���Z�}N�i,6b%�qh� �_���M�J����A�n�^llq�f����hZ�z�u�Rc<=mI��zU�,�_���ҍ�$9"���3"��ϗAR�ǡ/���YU�I����l�&��Q}�������{U<:۶F�!6�;��Bx���{��θ�	·��
�-��/#У+��:��V4�	�1/��5O�N���>�D�� ����
��9K�jA�K\��/
 r}:	�Я8wF}��뢇�f4�n!"��ߝM���	rw�.��#U������ �~�d��h�"�K�	�$	{���ø��ҊQV�_�^M��#l�j"DI���2�O�/=�Q�,^wf?�,���_��;�D?b9~�N�3���f�:uJ롓�y˲Ns�Q�>��~؅oJ%�/����w�i���$��O��H/����mi��Ɋ 0iO�S�H�9�*432Vx|�YRQ�$�џ�P����$U��_<N4��J@DPqE���r���41Y�0�L�K'Vt�T^���0sNf�z$��`�L^l.|� �X�T��E��5���z�
(�)_n_�>+�z���$1�ʟ���蠉?�Qغ��q��s���n�P�AdäbJ%�P �z;��(�Q�59r�c
����^cui0�(W��ڑ����'�j�����e��A�cx��ŲI��\'w� ��`��$9�/g��ӧ�̚�y�������0�4��Vk��g�<�~Z�u+N��§��r�6��4�k2o#�"�ĉ�ض�����
�p��aP��쭤RSn�:��t=vE��4�� ����:�y�	����Z��l�N�)�%��8w��̂�\a`��t��yb������?�zo��bj/��
�1�D�G���Y�bP�osx^(;)�$[��W��-�����s2c$��NXV&���,*�jmϑ���7cK��&.���7�OhW�����Mz�d�>�	Oi�f�-P�<Ԍ6h_"�FqI}�e��T���1x��D�M&��?{$�
���E5xƩ��˞�Sgy��2��䦕X���l�I6M�����iKo�m��q�%�1�탻��,�/y�t���@��JҾ�v�)�K��Ǵ4cm�p
X���jE|!�C�x���O84�+��}�iiP>&q!*N38�֖��l���$)]�M�/�c[�P &�u�T"U�6?V��	)��ʁ���y垙�л().�3b.�1����}����
�RX^/Ũ��)~�3�W:+�XڐN]Oj�>�}�إx�$��E�����qU�3�x��KQ20����6&j�h�g-�j��4��|�F��d�V���$�Z�kEDs��,#�VᏚZ����k�����>�����Md�nj��%��c��ڠ_:��!aNh��zs�S����I��-�dp�\]���K*V=m����)>���h(��{�I}k��B�l���Uw��|�\<�q�� �o���C =ϥ�IϮ����Z�V[a̎�p]ڟ_�����:��\�dڊ���>}����ڛ��).� ����}:+�r�?S홲ә'���V9^�>G�p�n����E謴� Dl�%?"z����p�bײ��o��ڤn����.�dj:ߨ	gqY��]�i�P釲J���}�[�o�NXb�s�2���gQ�\H�IUG֜�� L��Y(z&�4v�9����6��J��8�q�(=���K�(�f���ͮe�⸆@�~4��t�Z'��қ�l����rV���k�"2��v0���Rx۲������3�v!F"o��ЦQ��e+AFe�=�pP�� 0p7�ӷ >�g[���+��tL�%�8��a�<
�z-6���׆Ʉ!�btvA�����������a�x�㛾���X0}׸
q�VJ���ڋ�\K���A�xV�N��x�J��S]�}� fpl��N|������k��oϫ��f�����zq^
�ݽR�;�i�EXQ�\�����d	<�ԁ��A)��H�dn��i�2�Q��zr(�FH k�r��G�iO�����1�X��* GIIo���f�� ����n�-�������OFxȗ��Kz\kC���Z|��$U��
ƍ�Z�~�VN�-l�0~��{?�%��k��pH�3<�t�%�ٿ������6�X<�׆��w�C�Ck
<���Ǳ���5��͔e��zsB
��ް>�B
��=�FlΖ�9RD���t�-A�JO3�5�7�����i�N����� �ۤ�:h�����tF���d�ݪ)Qm`�`��ݫ���+�e��B�;C�4���=f�GݘL�����R�d�Jr��aF!�7ϑ�TL�f1���SS���M�P��z_�� ?�[���F�G�+Y�4ə�G�Ï��\N~oy+%dգ���H�L��<�9�Xj������U��7�8�m���\�-
����8�՘:��t�rD��әQ"�w���Xh��wf�R�^�:ӥ�N��dϋ)x�k��C�J�|ҕN��9�N�������ھ�ɍ��5���Ÿ^�8��Oz��H/�����d?��ʵ�~ԧ��r����f�h��ܞN��ޠ�{>��/�ٴ�y�P �  K6�T����9Zv"\���z�
��}����nl)T�y{�0�_)G&�2Z�=�?�!+����ȅ&jV.�x㌋b�q)y8��Ғ"mv� �^���}n����?*A��]!�I#����^?k�L��;)3OI+����ɤp�m�����4y��G��Ck�b<��=��bR@����/��Tt�_�ʁD�01�+���4Wb����sӱ������Wy��B33_"�,�� �����<@ir���V���+�8�I���7#��C.f	�t6N�E��Ϊ�a ��BG��_��c�=l��(�h�гfe�f�~�����#*(�G~7���ѵ��'Q��H��*з�
 ׭m�Y�hg��|�0�r
i�,utxs�D�ޕ��p����e�״���|;�4�g��ѱ�)�c��W�VQ��c ���>o���� {[+@x'3�p��i�2w�G���>���e PO%/3�%)�}n�V{/�U��!�Ȼ(��S�z\�8J�VIb3�%u+'��hN^B��[9��放�����3��Z2a��~��a�˯_&�4���TiKq.S+�}^�|����� ��i���U�~|���.,5צ�MG�����7�$$��߮���9:�~���[T�	/��P�Y�+}�`l�i�09�IptabU������oN˹���[���=7��ŕ��ZX���&	9{�( i�>�te���.���� �!�n�3���r���?L�L��/Ћ���e�e��bU�����<�_�s��^�K������l��=)[خ�n�%��@�k1���cHn�Z��R� m��X�ܲ����9�sp�v8Y�9ZZ!e��5�2�|�Oޛ��T��v0b�r$o(*hij��rss9Yk��J�Յ�4NP�e0���1ww�hH,�o5���_�^�x�?a�٥      �   D   x�3��M��TH)J-.3��
ҹ�8�J*��`6Xܘ373����p���A�!�L� �� �      �      x������ � �     