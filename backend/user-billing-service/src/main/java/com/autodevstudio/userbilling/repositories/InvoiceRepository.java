package com.autodevstudio.userbilling.repositories;

import com.autodevstudio.userbilling.entities.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
}
