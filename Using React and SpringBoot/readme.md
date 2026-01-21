
# Full Stack Development Guide

This guide provides a detailed overview of full stack development, including frontend, backend, databases, and essential tools. Each section explains the technology, its use, and provides examples for better understanding.

---

## Frontend Technologies

The frontend is the part of a web application that users interact with directly.

- **HTML (HyperText Markup Language):** The backbone of web pages, used to structure content.
	- Example: `<h1>Welcome to Full Stack Development</h1>`
- **CSS (Cascading Style Sheets):** Styles HTML elements, controls layout, colors, and fonts.
- **Bootstrap:** A CSS framework for building responsive, mobile-first sites quickly.
- **JavaScript (JS):** Adds interactivity and dynamic behavior to web pages.
- **ECMAScript:** The standard for JavaScript, introducing features like arrow functions, classes, and modules (ES6+).
- **ReactJS:** A library for building user interfaces with reusable components. Developed by Facebook.
- **AngularJS:** A framework for building dynamic single-page applications (SPAs) using HTML and TypeScript.
- **Next.js:** A React framework for server-side rendering and static site generation.
- **Vue.js:** A progressive framework for building user interfaces and SPAs.

---

## Backend Technologies

The backend handles business logic, database operations, and server-side functionality.

- **Spring Boot:** Java-based framework for building stand-alone, production-grade Spring applications.
- **Node.js:** JavaScript runtime for building scalable server-side applications.
- **Python:** Popular language for backend development (Django, Flask).
- **.NET:** Microsoft framework for building web, desktop, and mobile applications (C#, F#).

---

## Database Systems

Databases store and manage application data. There are two main types:

### Relational Databases (RDBMS)

- **RDBMS:** Manages data in tables (rows and columns) and uses SQL for queries.
- **Oracle:** Enterprise-grade RDBMS.
- **MySQL:** Open-source RDBMS, widely used for web apps.
- **SQL Server:** Microsoft’s RDBMS.
- **Sybase:** Open-source RDBMS (less common now).

### NoSQL / Non-Relational Databases

- **MongoDB:** Document-oriented, stores data as JSON-like documents.
- **Cassandra:** Distributed, highly scalable NoSQL database.
- **CouchDB:** Uses JSON for documents and JavaScript for queries.
- **Neo4j:** Graph database for connected data.

---

## Essential Tools

Tools that assist in development, testing, and deployment:

- **Maven & Gradle:** Build automation tools for Java projects.
- **Docker:** Containerization platform for packaging applications and dependencies.
- **Kubernetes:** Orchestrates and manages containers at scale.
- **Postman:** API testing tool for sending requests and viewing responses.
- **Swagger:** API documentation and testing framework.
- **Mockito:** Java library for unit testing with mock objects.
- **Jenkins:** Automation server for continuous integration and delivery (CI/CD).

---

## Database Concepts & SQL

### Key Terms

- **Data:** Raw facts and figures.
- **Field:** A column in a table.
- **Record:** A row in a table.
- **Table:** Collection of related records.
- **Database:** Collection of interrelated tables.

### SQL (Structured Query Language)

SQL is a non-procedural language for managing and querying relational databases.

#### SQL Command Types

- **DDL (Data Definition Language):** CREATE, ALTER, RENAME, TRUNCATE, DROP, PURGE
- **DML (Data Manipulation Language):** INSERT, UPDATE, DELETE, MERGE
- **DQL (Data Query Language):** SELECT (data retrieval)
- **TCL (Transaction Control Language):** COMMIT, ROLLBACK
- **DCL (Data Control Language):** GRANT, REVOKE

#### Data Types in SQL

- **CHAR:** Fixed-length character string.
- **VARCHAR:** Variable-length character string.
- **DECIMAL:** Numeric values with decimals.
- **DATE:** Stores date (YYYY-MM-DD).
- **TIMESTAMP:** Stores date and time.

#### Constraints in SQL

Constraints enforce rules for data in tables:
1. **Primary Key:** Unique, not null, no duplicates.
2. **Unique Key:** Unique, allows nulls.
3. **Not Null:** Field must have a value.
4. **Check Constraint:** Restricts values (e.g., gender = 'M' or 'F').
5. **Foreign Key:** References primary key in another table.
6. **Default:** Assigns a default value if none provided.

#### Example Table

```sql
CREATE TABLE Students (
	StudentID INT PRIMARY KEY,
	Name VARCHAR(100) NOT NULL,
	Gender CHAR(1) CHECK (Gender IN ('M', 'F')),
	Age INT DEFAULT 18
);
```

---

## JDBC (Java Database Connectivity)

JDBC is a Java API for connecting and executing queries with databases. It acts as a translator between Java and the database.


**Key JDBC Interfaces:**
- `Connection`: Establishes the connection.
- `Statement`: Executes SQL statements.
- `PreparedStatement`: Executes precompiled SQL statements.
- `CallableStatement`: Executes stored procedures.
- `ResultSet`: Stores data returned from queries.
- `ResultSetMetaData`: Provides info about the ResultSet.
- `DatabaseMetaData`: Provides info about the database.

**Import Statement:**
```java
import java.sql.*; // Imports all JDBC classes and interfaces
```


**JDBC Workflow:**
1. Load the JDBC driver.
2. Establish a connection.
3. Create a statement.
4. Execute SQL queries.
5. Process results.
6. Close the connection.

### Important JDBC Classes

- **DriverManager:** Registers and loads the JDBC driver, manages the set of JDBC drivers.
- **Date:** Handles SQL `DATE` data type (year, month, day).
- **Timestamp:** Handles both date and time (year, month, day, hour, minute, second, nanoseconds).

### Exception Handling in JDBC

- **ClassNotFoundException:** Thrown when the JDBC driver class is not found (usually when loading the driver).
- **SQLException:** Thrown for any SQL-related errors (e.g., invalid queries, connection issues).

### Types of JDBC Drivers

1. **Type 1: JDBC-ODBC Bridge Driver**
   - Translates JDBC calls into ODBC calls.
   - Requires ODBC driver installed on client machine.
   - Not recommended for production.

2. **Type 2: Native-API Driver**
   - Converts JDBC calls into database-specific native calls.
   - Requires native library on client machine.

3. **Type 3: Network Protocol Driver**
   - Sends JDBC calls to a middleware server, which then communicates with the database.
   - Useful for internet-based applications.

4. **Type 4: Thin Driver (Pure Java Driver)**
   - Converts JDBC calls directly into the database protocol.
   - Written entirely in Java, platform-independent.
   - **Recommended:** Fastest and most efficient, as it eliminates the need for native libraries or ODBC layers.

> **Note:** Type 4 drivers are preferred because they have one less layer (no OS-level or ODBC dependency), making them more portable and efficient.

---

## Hibernate

Hibernate is an Object-Relational Mapping (ORM) tool for Java. It simplifies database interactions by mapping Java objects (entities) to database tables, allowing developers to work with Java objects instead of SQL queries.

### Key Features

- **Automatic Table Mapping:** Maps Java classes to database tables and Java data types to SQL data types.
- **Database Independence:** Supports multiple databases with minimal code changes.
- **Transaction Management:** Handles transactions and connection pooling.

### Fetching Data in Hibernate

Hibernate provides several ways to query and fetch data:

1. **HQL (Hibernate Query Language):**
   - Object-oriented query language similar to SQL.
   - Uses entity class names and properties, not table or column names.
   - Database-independent (uses dialects for compatibility).

2. **JPQL (Java Persistence Query Language):**
   - Standardized query language for JPA (Java Persistence API).
   - Also uses entity class names and properties.

3. **Native SQL:**
   - Standard SQL queries executed directly on the database.
   - Uses actual table and column names.
   - Requires knowledge of database-specific SQL syntax.

### Limitation

- Hibernate focuses only on data logic (CRUD operations, transactions, etc.).
- **Disadvantage:** It does not handle business logic or application workflows; you must implement those separately.

---

## Spring Framework

Spring is an open-source, lightweight, dependency injection-based framework for developing Java and Java EE (Enterprise Edition) applications. It simplifies the development of robust, testable, and maintainable enterprise applications.

### Types of Java Applications

- **Desktop Application:** Built with Core Java, AWT, Swing, or Spring. The end product is a JAR file.
- **Web Application:** Built with Servlets, JSP, or Spring MVC. The end product is a WAR file (Web Application Archive).
- **Enterprise Application:** Built with EJB (Enterprise Java Beans) or Spring. The end product is an EAR file (Enterprise Archive: JAR + WAR).

### Key Concepts in Spring

- **POJO (Plain Old Java Object):** Simple Java objects not bound by any special restriction.
- **XML Configuration:** Spring beans and dependencies can be defined in XML files.
- **Annotations:** Modern Spring applications use annotations (e.g., `@Component`, `@Autowired`) for configuration and dependency injection.

### What is a Framework?

A framework combines technology and design patterns to provide a reusable structure for application development.
- **Example:** For mailing, use JavaMail; for messaging, use JMS or Kafka.

**Design Pattern:** A well-approved solution to a common software design problem.

**Purpose of a Framework:**  
- **RAD (Rapid Application Development):** Speeds up development by providing reusable components and best practices.

### Features of Spring

- Suitable for distributed applications.
- Supports container-based architecture (Spring Container).

### Spring Container System

The Spring container is responsible for:
1. Scanning classes.
2. Creating objects (beans).
3. Providing data (dependency injection).
4. Linking objects (wiring beans).
5. Destroying objects when no longer needed.

**Types of Spring Containers:**
- **BeanFactory:** The original container, now considered legacy and rarely used.
- **ApplicationContext:** The modern container, provides advanced features like internationalization, event propagation, and AOP. Implements Inversion of Control (IoC).

* Both are interfaces provided by Spring. *

### Spring Framework Modules

- **Spring Core**
- **Spring DAO**
- **Spring AOP**
- **Spring Context**
- **Spring Web**
- **Spring MVC**
- **Spring ORM**

---

### Key Spring Concepts

- **Spring Bean:** A class managed by Spring, following rules provided by the framework.
- **Instance Variable:** Class-level variable (also called dependency variable in Spring).
- **Local Variable:** Variable declared inside a function.
- **Dependency Injection:** Providing data to dependency variables (instance variables) in Spring.

---

### Types of Dependency Injection

- **Primitive Types:** `int`, `double`, `float`, `boolean`, `String`
- **Collection Types:** `List`, `Set`, `Map`, `Properties`
- **Constructor Injection**
- **Interface Injection**
- **Field Injection**

---

### Annotations in Spring

- **Basic Annotations**
- **Stereotype Annotations**

---

### Steps to Create a Spring Application

1. Create a Maven project
2. Add Spring dependencies
3. Create a Spring Bean class
4. Create a Spring configuration class using annotations
5. Create the main class

---

### Setter Injection

- **Primitive Types:** `int`, `float`, `double`, `boolean`, `String`
- **Collection Types:** `List`, `Set`, `Map`, `Properties`
  - **List:** Allows duplicate values
  - **Set:** Does not allow duplicate values
  - **Map:** Key-value pairs; keys are unique, values may be duplicated
  - **Properties:** Key-value pairs (both are strings); keys are unique, values may be duplicated


---

## Autowiring in Spring

**Autowiring** is the process of automatically linking beans (objects) in the Spring container.

**Types of Autowiring:**
- **byName:** Injects dependency by matching bean name.
- **byType:** Injects dependency by matching bean type.
- **autodetect:** Spring chooses by constructor or byType.
- **constructor:** Injects dependency using constructor.
- **no (default):** No autowiring; dependencies must be set manually.

---

## Common Hibernate Annotations

- `@Entity` — Marks a class as a database entity (table name = class name by default).
- `@Table` — Specifies the table name.
- `@Id` — Marks the primary key field.
- `@Column` — Maps a field to a table column.
- `@GeneratedValue` — Auto-generates primary key values.
- `@Temporal(TemporalType.DATE)` — Maps a field to a SQL DATE column.
- `@Temporal(TemporalType.TIMESTAMP)` — Maps a field to a SQL TIMESTAMP column.
- `@OneToOne` — One-to-one relationship mapping.
- `@JoinColumn` — Specifies the foreign key column for relationships.
- `@Query` — Defines custom queries.

---

## Common Spring Annotations

- `@Component` — Marks a class as a Spring bean.
- `@ComponentScan` — Scans for beans in specified packages.
- `@Value` — Injects values into fields.
- `@PropertySource` — Loads properties file.
- `@Autowired` — Injects dependencies automatically.
- `@Repository` — Marks a DAO (Data Access Object) class.
- `@Service` — Marks a service class.
- `@Controller` — Marks a web controller.
- `@RestController` — Marks a RESTful web controller.
- `@Configuration` — Marks a configuration class.
- `@EnableAutoConfiguration` — Enables Spring Boot’s auto-configuration.
- `@Scope` — Defines bean scope (singleton, prototype, etc.).

---

## Spring Boot

### Limitations of Traditional Spring

1. Many dependencies with compatible versions must be managed.
2. Lots of manual configuration.
3. Requires an external server (e.g., Tomcat) for web development.

### What is Spring Boot?

Spring Boot is a framework built on top of Spring to simplify setup, configuration, and deployment.

### Advantages

1. **Starter dependencies:** Bundles related JARs into a single unit (e.g., `spring-boot-starter`, `spring-boot-starter-web`).
2. **Auto-configuration:** Automatically configures beans (e.g., `JdbcTemplate`). Use `@EnableAutoConfiguration` to enable.
3. **Embedded server:** No need for an external server; comes with embedded Tomcat/Jetty.

**SpringBoot = Spring + XML-free config + Embedded Server**

### Main Class Annotation

- `@SpringBootApplication` — Combines `@ComponentScan`, `@Configuration`, and `@EnableAutoConfiguration`.

### Requirements

- Spring 3.5.9+
- Java 17+
- Maven or Gradle project

### Ways to Create a Spring Boot Project

1. Maven
2. Spring Initializer
3. Spring Boot Starter project

### Example Database Properties

```properties
myapp.db.drivernm=com.mysql.cj.driver
myapp.db.url=localhost:3306/ayush
myapp.db.uname=root
myapp.db.pass=Ayush
```

- **YAML** is preferred for configuration: more readable, no duplicate keys.

---

## Bean Scopes in Spring

- **singleton:** One instance per Spring container (default).
- **prototype:** New instance every time bean is requested.
- **session:** One instance per HTTP session (web apps).


data jpa

interface
Crudrepository <T,ID>
t=entity class
id= data type of primary key

jpaRepository<T,ID>
intrface jpaRepository<T,ID> extends CrudRepository<T,ID>

methods of jpaRepository
1. save()  //insert or update
2. findById() //select with where clause based on primary key
3. findAll() //select *
4. deleteById() //delete with where clause based on primary key
5. deleteAll() // delete all records

bind variable :

Restful webservice:

WebSerivice used to communicate between two interoperable systems over the internet using HTTP protocol

Types of web service:

1. SOAP web service(simple object access protocol): uses XML format to send and receive data
2. REST web service (representational state transfer): uses XML and JSON format to send and receive data. It needs Http methods to perform CRUD operations.

HTTP Methods:

```plaintext
Get: fetch data
Post: send data
Put: update data
Delete: delete data
Patch: partial update of data
```

Error Codes:

```plaintext
200: OK (successful)
201: Created (resource created successfully)
204: No Content (successful but no content to return)
400: Bad Request (client error)
404: Not Found (resource not found)
500: Internal Server Error (server error)
```

url Types:

1. Resource Based URL: identifies the resource (e.g., /users, /products)
2. Action Based URL: identifies the action to be performed using ? parameter (e.g., /createUser, /deleteProduct)

RestApi Tools:

1. Postman: for testing APIs
2. Swagger: for documenting APIs

Dependencies for Spring Boot RESTful Web Services:
Mysql
Spring Data JPA
Spring Web
Spring devtools


@Repository-object creation +database operation
@Service-object creation + transaction management
@Controller-object creation + web application-handle http requests and responses
@RestController- object creation + RESTful web service -handle http requests and responses in JSON or XML format

Restapi project Structure:
com.ayush.model - entity classes
com.ayush.repository - repository interfaces
com.ayush.service - service classes
com.ayush.controller - Restcontroller classes


Spring Boot Annotations for RESTful Web Services:

1. @GetMapping : to fetch data from server
2. @PostMapping : to send data to server
3. @PutMapping : to update existing data on server
4. @DeleteMapping : to delete existing data from server


JavaScript

Js is a programming language used to create dynamic and interactive web pages. It is a client-side scripting language that runs in the web browser.
It can be used for both frontend and backend development.

Purpose of JavaScript:
1. Creating dynamic user interfaces
2. client side and server side validation
3. Communicate with frontend and backend applications

Area of JavaScript:
1. Desktop applications
2. Web applications
3. Mobile applications
4. Game development
5. Machine learning Apps

Javascript Runtime Environments:
1. Browser (Chrome, Firefox, Edge)
2. Node.js

Types of variables in JavaScript:

## Primitive Data Types:

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt

## Non-Primitive Data Types:

1. Object
2. Array
3. Function
4. Map
5. Set

---

## Reference

arindamslt/AECFULLSTACKJAN2026BATCH1
