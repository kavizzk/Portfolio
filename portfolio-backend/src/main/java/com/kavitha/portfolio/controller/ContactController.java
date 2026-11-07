package com.kavitha.portfolio.controller;

import com.kavitha.portfolio.dto.ContactRequest;
import com.kavitha.portfolio.dto.ContactResponse;
import com.kavitha.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"http://localhost:4200", "http://127.0.0.1:4200"})
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactResponse> submitContactMessage(@Valid @RequestBody ContactRequest request) {
        ContactResponse response = contactService.saveMessage(request);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @GetMapping("/health")
    public ResponseEntity<ContactResponse> healthCheck() {
        return ResponseEntity.ok(new ContactResponse(true, "Contact API is running and ready."));
    }
}
