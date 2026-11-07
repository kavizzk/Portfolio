package com.kavitha.portfolio.service;

import com.kavitha.portfolio.dto.ContactRequest;
import com.kavitha.portfolio.dto.ContactResponse;
import com.kavitha.portfolio.entity.ContactMessage;
import com.kavitha.portfolio.repository.ContactRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ContactService {

    private static final Logger logger = LoggerFactory.getLogger(ContactService.class);

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Transactional
    public ContactResponse saveMessage(ContactRequest request) {
        logger.info("Processing contact message from {} <{}>", request.getName(), request.getEmail());

        ContactMessage entity = new ContactMessage(
                request.getName().trim(),
                request.getEmail().trim(),
                request.getSubject().trim(),
                request.getMessage().trim()
        );

        ContactMessage saved = contactRepository.save(entity);
        logger.info("Contact message saved successfully with ID: {}", saved.getId());

        return new ContactResponse(
                true,
                "Thank you, " + saved.getName() + "! Your message has been received successfully."
        );
    }
}
