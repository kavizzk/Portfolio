package com.kavitha.portfolio.exception;

import com.kavitha.portfolio.dto.ContactResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.stream.Collectors;

@RestControllerAdvice
public class GlobalExceptionHandler {

    private static final Logger logger = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ContactResponse> handleValidationExceptions(MethodArgumentNotValidException ex) {
        String errorMessage = ex.getBindingResult()
                .getAllErrors()
                .stream()
                .map(error -> {
                    if (error instanceof FieldError fieldError) {
                        return fieldError.getField() + ": " + fieldError.getDefaultMessage();
                    }
                    return error.getDefaultMessage();
                })
                .collect(Collectors.joining("; "));

        logger.warn("Validation error: {}", errorMessage);

        return ResponseEntity
                .status(HttpStatus.BAD_REQUEST)
                .body(new ContactResponse(false, "Validation failed: " + errorMessage));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ContactResponse> handleGeneralException(Exception ex) {
        logger.error("An unexpected error occurred while processing contact request", ex);

        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ContactResponse(false, "An error occurred while submitting your message. Please try again later."));
    }
}
