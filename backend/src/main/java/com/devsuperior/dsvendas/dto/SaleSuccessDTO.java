package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

/**
 * Esta classe cria uma consulta de resultados totais
 * de vendas de cada vendedor.
 * @author vinic
 *
 */
public class SaleSuccessDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	
	
	private String sellerName;
	private Long visited;
	private Long deals;
	
	public SaleSuccessDTO() {}

	public SaleSuccessDTO(Seller seller, Long visited, Long deals) {
		this.sellerName = seller.getName();
		this.setVisited(visited);
		this.setDeals(deals);
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Long getVisited() {
		return visited;
	}

	public void setVisited(Long visited) {
		this.visited = visited;
	}

	public Long getDeals() {
		return deals;
	}

	public void setDeals(Long deals) {
		this.deals = deals;
	}

}