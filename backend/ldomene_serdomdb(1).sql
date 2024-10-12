-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 08-08-2024 a las 22:01:31
-- Versión del servidor: 10.3.39-MariaDB-cll-lve
-- Versión de PHP: 8.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ldomene_serdomdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrusel`
--

CREATE TABLE `carrusel` (
  `id` int(11) NOT NULL,
  `imagen` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `carrusel`
--

INSERT INTO `carrusel` (`id`, `imagen`) VALUES
(17, 'Captura de pantalla 2023-08-27 a la(s) 12.36.21.png'),
(8, 'carrusel7.jpg'),
(12, 'carrusel11.jpg'),
(16, 'Captura de pantalla 2023-08-27 a la(s) 12.34.43.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogo`
--

CREATE TABLE `catalogo` (
  `id` int(11) NOT NULL,
  `nombre` varchar(250) NOT NULL,
  `descripcion` varchar(250) NOT NULL,
  `imagen` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `catalogo`
--

INSERT INTO `catalogo` (`id`, `nombre`, `descripcion`, `imagen`) VALUES
(7, 'EnergÃ­a renovables', 'Gama de productos para sus necesidades en cuanto a la generaciÃ³n y control', 'panel solar.jpg'),
(8, 'Instrumentos de mediciones elÃ©ctricas', 'instrumentos que miden las variables de interes en el proceso productivo', 'multimetros.jpg'),
(10, 'Accesorios neumÃ¡ticos', 'Tubos flexibles de poliuretano, conectores, reguladores de caudal y unidades FRL.', 'Captura de Pantalla 2021-11-07 a la(s) 14.56.01.png'),
(11, 'Variables FÃ­sicas', 'Instrumentos y/o equipos de mediciÃ³n, monitoreo y control del proceso', 'variables fisicas.png'),
(15, 'AutomatizaciÃ³n y Control', 'Elementos inteligentes para automatizar y controlar cualquier proceso industrial', 'banner 1.png'),
(16, 'Motores y Elementos Final de Control', 'Elementos para la automatizaciÃ³n del proceso productivo.', 'Captura de pantalla 2023-08-20 a la(s) 16.01.02.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `id_catalogo` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `imagen` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `id_catalogo`, `nombre`, `imagen`) VALUES
(31, 11, 'MEDICION DE NIVEL', 'Captura de Pantalla 2021-11-06 a la(s) 19.12.47 Medium.jpeg'),
(32, 11, 'CAUDALIMETROS', 'mis-durchfluss-1.800x600-aspect.jpg'),
(36, 7, 'REGULADOR DE CARGA', 'panel solar_5.jpg'),
(38, 8, 'MULTIMETROS', 'Captura de Pantalla 2021-11-07 a la(s) 14.53.45.jpg'),
(39, 8, 'PINZAS AMPERIMETRICAS', 'Captura de Pantalla 2021-11-07 a la(s) 14.52.57.jpg'),
(40, 10, 'TUBERIA FLEXIBLE', 'Captura de Pantalla 2021-11-07 a la(s) 14.56.38.jpg'),
(41, 10, 'CONECTORES', 'Captura de Pantalla 2021-11-07 a la(s) 14.56.01.jpg'),
(42, 10, 'UNIDAD DE MANTENIMIENTO', 'Captura de Pantalla 2021-11-07 a la(s) 15.36.31.jpg'),
(43, 7, 'PANELES SOLARES', 'panel solar principal.jpg'),
(46, 8, 'CALIDAD DE ENERGIA', 'Captura de pantalla 2022-11-01 a la(s) 13.11.35.jpg'),
(47, 8, 'MEDICION AISLAMIENTO', 'Captura de pantalla 2022-11-01 a la(s) 13.12.32.jpg'),
(48, 8, 'OSCILOSCOPIOS', 'Captura de pantalla 2022-11-01 a la(s) 13.20.40.jpg'),
(51, 7, 'INVERSORES SOLARES', 'Captura de pantalla 2022-11-01 a la(s) 16.37.23.jpg'),
(52, 7, 'GENERADOR EOLICO', 'Captura de pantalla 2022-11-01 a la(s) 16.38.21.jpg'),
(53, 8, 'CAMARAS TERMOGRAFICAS', 'Captura de pantalla 2022-12-11 a la(s) 07.42.40.jpg'),
(54, 8, 'FUENTE DE PODER', 'Captura de pantalla 2022-12-18 a la(s) 09.13.33.jpg'),
(66, 15, 'PLC', 'PLC.png'),
(67, 15, 'HMI', 'HMI2.png'),
(68, 15, 'SERVO', 'servo (2).png'),
(69, 15, 'VARIADORES AC/DC Y PARTIDORES SUAVES', 'VM INVERTER-2.png'),
(70, 15, 'IOT Y TRANSMISION DE DATOS', 'V-BOX_2.png'),
(72, 15, 'CONTACTORES/GUARDAMOTORES Y RELES', 'Captura de pantalla 2023-08-20 a la(s) 16.37.56.png'),
(73, 15, 'PULSADORES Y SELECTORES', 'Captura de pantalla 2023-08-20 a la(s) 16.43.07.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `manualpdf` varchar(200) NOT NULL,
  `precio` int(12) NOT NULL,
  `stock` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_producto`, `id_categoria`, `nombre`, `descripcion`, `imagen`, `manualpdf`, `precio`, `stock`) VALUES
(11, 39, 'UT 207', 'PINZA AMPERIMETRICA 1000A TRUE RMS', 'Captura de pantalla 2022-12-11 a la(s) 08.00.52.jpg', 'UT200%20Series%20Flyer.pdf', 0, 0),
(12, 48, 'UTD 1000C SERIES', 'OSCILOCOPIO/MULTIMETRO  PORTATIL', 'Captura de pantalla 2022-12-11 a la(s) 07.35.53.jpg', 'UTD1000C Datesheet-2.pdf', 0, 0),
(13, 53, 'UTI 120B', 'TERMOGRAFO PROFESIONAL', 'Captura de pantalla 2022-12-11 a la(s) 07.43.08.jpg', 'UTi120B%20User%20Manual.pdf', 0, 0),
(14, 54, 'UTL 8211/8212', 'CARGA DC ELECTRONICA', 'Captura de pantalla 2022-12-11 a la(s) 07.38.30.jpg', 'UTL8200 Series.pdf', 0, 0),
(15, 38, 'UT 191 SERIES', 'MULTIMETRO PROFESIONAL TRUE RMS', 'Captura de pantalla 2022-12-18 a la(s) 09.21.21.jpg', 'UT191%20Series%20Flyer.pdf', 0, 0),
(16, 53, 'UTI 120M/720M/721M', 'CAMARA TERMOGRAFICA P/ANDROID', 'Captura de pantalla 2022-12-11 a la(s) 07.44.55.jpg', 'UTI120M.pdf', 0, 0),
(29, 66, 'LX3V-0806MR-A2', 'PLC WECON con 8 entradas/ 6 salidas a rele, comunicaciÃ³n 485, no posee salida a pulso, se puede programar con un cable mini usb o por el puerto 485', '0806MR-1.png', 'Captura de pantalla 2023-08-20 a la(s) 17.15.55.png.pdf', 0, 0),
(30, 66, 'LX3V-0806MT-A2', 'PLC WECON con 8 entradas/ 6 salidas a transistor, comunicaciÃ³n 485, posee 2 salidas a pulso, se puede programar con un cable mini USB o por el puerto 485', '0806MT.png', 'LX3V PLC.pdf', 0, 0),
(38, 66, 'LX3V-1208MR-A2', 'PLC WECON con 12 entradas/8 salidas a Ã¡rele, comunicaciÃ³n 485, no posee salida de pulsos, se puede programar con un cable mini USB o por el puerto 485.', '1208MR.png', 'LX3V PLC.pdf', 0, 0),
(39, 66, 'LX3V-1212MR', 'PLC WECON con 12 entradas/ 12 salidas a rele, 2 puertos comunicaciÃ³n 485, no posee salida a pulsos, se puede programar con un cable mini USB o por el puerto 485.', 'LX3V-1212MR1.png', 'LX3V PLC.pdf', 0, 0),
(40, 66, 'LX3V-1212MT', 'PLC WECON con 12 entradas/12 salidas a transistores, con 2 puertos 485, posee salida a pulsos, se puede programar con un cable mini USB o por el puerto 485.', 'LX3V-1212MT1.png', 'LX3V PLC.pdf', 0, 0),
(41, 66, 'LX3V-1616MR', 'PLC WECON con 16 entradas / 16 salidas a rele, 2 puertos 485, no posee salida a pulsos, se puede programar con un cable mini USB o por el puerto 485.', 'LX3V-1616MR1.png', 'LX3V PLC.pdf', 0, 0),
(42, 66, 'LX3V-1616MT', 'PLC WECON con 16 entradas / 16 salidas a transistor, 2 puertos 485, posee 2 salidas a pulsos, se puede programar con un cable mini USB o por el puerto 485.', 'LX3V-1616MT1.png', 'LX3V PLC.pdf', 0, 0),
(43, 66, 'LX3V-2416MR', 'PLC WECON con 24 entradas / 16 salidas a rele, posee 2 puertos 485, no posee salida a pulsos, se puede programar con un cable mini USB o por el puerto 485.', 'LX3V-2416MR1.png', 'LX3V PLC.pdf', 0, 0),
(44, 66, 'LX3V-2416MT', 'PLC WECON con 24 entradas / 16 salidas a transistor, posee 2 puertos 485, posee salida a pulso, se puede programar con un cable mini USB o por el puerto 485.', 'LX3V-2416MT1.png', 'LX3V PLC.pdf', 0, 0),
(45, 66, 'LX3V-3624MR', 'PLC WECON con 36 entradas / 24 salidas a rele, 2 puertos 485, no posee salida a pulsos, se puede programar con un cable mini USB o por el puerto 485.', 'LX3V-3624.png', 'LX3V PLC.pdf', 0, 0),
(46, 66, 'LX5S-0806MT', 'PLC WECON con 08 entradas / 6 salidas a transistor, comunicaciÃ³n 485, posee 2 contadores, E-CAM, se puede programar con un cable mini USB o por el puerto 485.', 'LX5S-0806-1.png', 'WECON LX5S PLC Flyer.pdf', 0, 0),
(47, 66, 'LX6V-0808MT-DB', 'PLC WECON con 8 entradas / 8 salidas a transistor, 4 contadores de pulsos, 4 salidas de pulsos, E-CAM, 2 RS-485, ETHERNET, ETHERCAT, hasta 16 ejes.', 'Captura de pantalla 2023-08-27 a la(s) 09.20.14.png', 'WECON LX6V PLC Flyer.pdf', 0, 0),
(48, 66, 'LX6V-0808MT-DD', 'PLC WECON con 8 entradas / 8 salidas a transistor, 4 contadores de pulsos, 4 salidas de pulsos, E-CAM, 2 RS-485, ETHERNET, ETHERCAT, hasta 64 ejes.', 'Captura de pantalla 2023-08-27 a la(s) 09.20.14.png', 'WECON LX6V PLC Flyer.pdf', 0, 0),
(49, 66, 'LX6V-0808MT-DE', 'PLC WECON con 8 entradas / 8 salidas a transistor, 4 contadores de pulsos, 4 salidas de pulsos, E-CAM, 2 RS-485, ETHERNET, ETHERCAT, hasta 128 ejes.', 'Captura de pantalla 2023-08-27 a la(s) 09.20.14.png', 'WECON LX6V PLC Flyer.pdf', 0, 0),
(50, 69, 'VB-2TR75GB', 'VARIADOR AC WECON para motores de 0,75KW, entrada trifÃ¡sica 220VAC, cuenta con control torque (0-320Hz) y control V/F (0-1000Hz),RS-485.  ', '0.75KW-7.5KW(1).png', '0.75KW-1.5KW INVERTER.pdf', 0, 0),
(51, 69, 'VB-2T1R5GB', 'VARIADOR AC WECON para motores de 1,5KW, entrada trifÃ¡sica 220VAC, cuenta con control torque (0-320Hz) y control V/F (0-1000Hz), RS-485.', '0.75KW-7.5KW(1).png', '0.75KW-1.5KW INVERTER.pdf', 0, 0),
(52, 69, 'VB-4T004GB', 'VARIADOR AC WECON para motores de 4KW, entrada trifÃ¡sica 380VAC, cuenta con control torque (0-320Hz) y control V/F (0-1000Hz), RS-485.', '0.75KW-7.5KW(1).png', '4KW INVERTER.pdf', 0, 0),
(53, 69, 'VB-4T075G', 'VARIADOR AC WECON para motores de 75KW, entrada trifÃ¡sica 380VAC-440VAC, cuenta con control torque (0-320Hz) y control V/F (0-1000Hz).', '11KW-185KW(1).png', '75KW-110KW INVERTER.pdf', 0, 0),
(54, 69, 'VM-2SR75', 'VARIADOR AC WECON para motores de 0,75KW, entrada monofÃ³nica 220VAC, cuenta con control V/F (0-400Hz), tamaÃ±o reducido riel/tornillos.', 'VM 0.75-2.2KW (1).png', '0.75KW-1.5KW INVERTER.pdf', 0, 0),
(55, 67, 'PI3035ie', 'HMI WECON de 3,5 pulgadas, TFT resistivo, con conexiÃ³n micro USB para la programaciÃ³n con PIstudio.', 'PI3035ie_3.png', 'HMI Instruction.pdf', 0, 0),
(56, 67, 'PI3102ie (IPS)', 'HMI WECON de 10,2 pulgadas, TFT resistivo, USB 2.0 anfitrion + USB 2.0 cliente, programaciÃ³n con PIstudio.', 'PI3102ie.png', 'HMI Instruction.pdf', 0, 0),
(57, 67, 'PI8070-C', 'HMI WECON de 7 pulgadas, TFT resistivo, USB 2.0 anfitrion + USB 2.0 cliente, programaciÃ³n con PIstudio. ', 'PI8070-1.png', '', 0, 0),
(58, 67, 'PI8150ig-C', 'HMI WECON de 15 pulgadas, TFT resistivo, con funciones V-NET (control remoto, actualizaciÃ³n,SCADA, MQTT, monitoreo LAN).', 'PI8150ig (1).png', '', 0, 0),
(59, 70, 'V-BOX H00', 'DISPOSITIVO NUBE WECON para control remoto, 3 puertos ETHERNET, 2 entradas optoaisladas / 2 salidas a rele.', 'V-BOX H-00 (1).png', '', 0, 0),
(60, 70, 'V-BOX H-4G', 'DISPOSITIVO NUBE WECON para control remoto, 3 puertos ETHERNET, 2 entradas optoaisladas / 2 salidas a rele, 4G.', 'V-BOX H (1).png', '', 0, 0),
(61, 70, 'V-BOX H-WF', 'DISPOSITIVO NUBE WECON para control remoto, 3 puertos ETHERNET, 2 entradas optoaisladas / 2 salidas a rele, WIFI.', 'V-BOX H-00 (1).png', '', 0, 0),
(62, 70, 'V-BOX E-00', 'DISPOSITIVO NUBE WECON para control remoto, 1 puerto ETHERNET, COM 1: RS232, RS422/RS485.', 'V-BOX E-00 (1).png', '', 0, 0),
(63, 70, 'V-BOX E-4G', 'DISPOSITIVO NUBE WECON para control remoto, 1 puerto ETHERNET, COM 1: RS232, RS422/RS485, 4G.', 'Captura de pantalla 2023-08-27 a la(s) 13.31.08.png', '', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `clave` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `correo`, `usuario`, `clave`) VALUES
(1, '', '', 'Rodolfo', 'r7991951'),
(2, '', '', 'ldomene', '25lqmXe;v6');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrusel`
--
ALTER TABLE `carrusel`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `catalogo`
--
ALTER TABLE `catalogo`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`,`id_catalogo`),
  ADD KEY `id_catalogo` (`id_catalogo`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`,`id_categoria`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrusel`
--
ALTER TABLE `carrusel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `catalogo`
--
ALTER TABLE `catalogo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD CONSTRAINT `categoria_ibfk_1` FOREIGN KEY (`id_catalogo`) REFERENCES `catalogo` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_categoria`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
