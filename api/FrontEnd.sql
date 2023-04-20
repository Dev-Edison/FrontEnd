-- ----------------------------------------------
-- FrontEnd - Banco de dados
-- By Edison
-- MIT License
--
-- Modela o banco de dados da api do aplicativo.
-- ---------------------------------------------

-- Apaga o banco de dados caso ele exista.
-- IMPORTANTE! Só faça isso em momento de desenvolvimento.
-- Nunca user este código em produção.

 DROP DATABASE IF EXISTS FrontEnd;

 -- Cria o banco de dados com caracteres e buscas cae-inesensitive.
 CREATE DATABASE FrontEnd  CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

 -- Seleciona o banco de dados para as proximas interações.
 USE FrontEnd;

 -- Cria tabela dos contatos → contacts.
CREATE TABLE contacts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status ENUM ('received', 'readed', 'responded', 'deleted') DEFAULT 'received'
);



