package me.escoffier;

import org.eclipse.microprofile.reactive.messaging.Incoming;
import org.jboss.logging.Logger;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class MovieConsumer {

    private static final Logger LOGGER = Logger.getLogger("MovieConsumer");

    @Incoming("movies-from-kafka")
    public void receive(Transaction transaction) {
        LOGGER.infof("Received movie: %s (%d)", transaction.getId(), transaction.getAmount());
    }

}
