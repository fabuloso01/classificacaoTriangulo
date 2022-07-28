function triangulo (a, b, c) {

  let lado1 = a;
  let lado2 = b;
  let lado3 = c;

  if (a < (b+c) && b < (a+c) && c < (a+b)) {
     if (a == b && b ==c) {
      return ("Equilátero");
    }
     else if (a == b || a == c || c == b) {
      return ("Isósceles");
    }
    else {
      return ("Escaleno");
    } 
    
  } 
  
}

